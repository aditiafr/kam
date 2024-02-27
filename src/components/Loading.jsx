// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex justify-center items-center h-full gap-6">
        <div className="animate-spin h-20 w-20">
          <img src="/images/logo-ori.png" alt="img-logo" />
        </div>
        <div className="w-[120px]">
          <img src="/images/logo-kam.png" alt="img-logo" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
