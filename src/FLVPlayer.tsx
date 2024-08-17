import React, { useRef, useEffect, useState } from 'react';
import flvjs from 'mpegts.js';
 
function FLVPlayer () {
  const videoRef = useRef<HTMLVideoElement>(null);
  const flvPlayerRef = useRef<flvjs.Player>();

  const [url, setUrl] = useState('');
 
  // useEffect(() => {

  //   // return () => {
  //   //   if (flvPlayerRef.current) {
  //   //     flvPlayerRef.current.unload();
  //   //     flvPlayerRef.current.detachMediaElement();
  //   //     flvPlayerRef.current.destroy();
  //   //   }
  //   // };
  // }, [url]);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    //const button: HTMLButtonElement = event.currentTarget;
    if (flvjs.isSupported()) {
      if (flvPlayerRef.current) {
        flvPlayerRef.current.unload()
        flvPlayerRef.current.detachMediaElement();
        flvPlayerRef.current.destroy();
      }

      flvPlayerRef.current = flvjs.createPlayer({
        type: 'flv',
        url: url,
        isLive: true, // 是否为直播流
      });
 
      if (videoRef.current) {
        flvPlayerRef.current.attachMediaElement(videoRef.current);
      }
      
      flvPlayerRef.current.load();
      flvPlayerRef.current.play();
    }
  };


  return (
    <div>
      <form>
        <label>URL：<input value={url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
        </label>
        <button onClick={buttonHandler}>播放</button>
      </form>
      <video ref={videoRef} controls width="400" height="240" />
    </div>
  );
};
 
export default FLVPlayer;
