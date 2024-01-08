import { useEffect, useState, useRef } from "react";
import { FaSpotify } from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";
import InlineLink from "./InlineLink";

export default function SpotifyActivity() {
  const [data, setData] = useState(null);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [loading, setLoading] = useState(true);

  const socketRef = useRef(null);
  const [heartbeatInterval, setHeartbeatInterval] = useState(30000);

  useEffect(() => {
    const websocketUrl = 'wss://api.lanyard.rest/socket';
    const websocket = new WebSocket(websocketUrl);

    socketRef.current = websocket;

    return () => {
      // Close the WebSocket connection when the component unmounts
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.onopen = () => {
      socketRef.current.send(JSON.stringify({ op: 2, d: { subscribe_to_id: '767169362771574834' } }));
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 1) setHeartbeatInterval(data.d?.heartbeat_interval);
      if (data.t === 'INIT_STATE') setData(data.d);
      else if (data.t === 'PRESENCE_UPDATE') setData(data.d);
    };
  }, []);

  useEffect(() => {
    if (!socketRef.current) return;

    const interval = setInterval(() => {
      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify({ op: 3 }));
      }
    }, heartbeatInterval);

    return () => {
      clearInterval(interval);
    };
  }, [heartbeatInterval]);

  useEffect(() => {
    if (!data) return;
    setLoading(false);
    if (!data.spotify) return;

    const { timestamps, song, album_art_url, track_id, artist, album } = data.spotify;

    if (!timestamps || !song || !album_art_url || !track_id || !artist || !album) return;

    const startTimestamp = timestamps.start;
    const endTimestamp = timestamps.end;
    const currentTimestamp = Date.now();

    const totalMilliseconds = endTimestamp - startTimestamp;
    const elapsedMilliseconds = currentTimestamp - startTimestamp;

    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const totalSeconds = Math.floor(totalMilliseconds / 1000);

    setTotalSeconds(totalSeconds);
    setCurrentSeconds(elapsedSeconds % totalSeconds);

    const interval = setInterval(() => {
      setCurrentSeconds((prevCurrentSeconds) => prevCurrentSeconds + 1);
      const progress = (elapsedMilliseconds / totalMilliseconds) * 100;
      const progressBar = document.getElementById("progress");
      if (progressBar) {
        progressBar.value = progress;
      }
    }, 1000);

    const timeout = setTimeout(() => {
      setData(null);
    }, totalMilliseconds);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [data]);

  return (
    (!loading && data?.spotify) ? (
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }} key={data.spotify.session_id}>
                <div className="spotify">
          <div className="spotify-top">
            <a id="url" target="_blank" href={`https://open.spotify.com/intl-tr/track/${data?.spotify?.track_id}`}>
              <Image id="art_url" alt="Cover of Nothing playing... by" src={data.spotify.album_art_url} width="400" height="400" />
            </a>
            <span className="info">
              <h2 id="song">{data.spotify.song}</h2>
              <h3 id="artist">{data.spotify.artist}</h3>
              <h4 id="album">{data.spotify.album}</h4>
            </span>
          </div>
          <span id="progressbar">
            <h4 id="start"> {Math.floor(currentSeconds / 60)}:{currentSeconds % 60 < 10 ? `0${currentSeconds % 60}` : currentSeconds % 60}</h4>
            <progress id="progress" value="0" max="100"></progress>
            <h4 id="end">{Math.floor(totalSeconds / 60)}:{totalSeconds % 60}</h4>
          </span>
        </div>
      </motion.div>
    ) : (loading && (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }} key={'loadingSpotifyActivity'}>
                <div className="my-3 text-xs flex items-center gap-1.5 text-light-tertiaryText dark:text-dark-tertiaryText flex-wrap">
          <span className="flex items-center -mr-1 text-green-400 gap-x-1">
            <FaSpotify className='inline' size={18} />
            {' Spotify'}
          </span>
          {' activity is loading..'}
        </div>
        <div className='flex-1 h-0.5 bg-light-tertiary dark:bg-dark-tertiary rounded-full relative' />
      </motion.div>
    ))
  );
}
