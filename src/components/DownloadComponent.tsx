import React from 'react';

interface DownloadProps {
  modelUrl: string;
  textureUrl: string;
}

const DownloadComponent: React.FC<DownloadProps> = ({ modelUrl, textureUrl }) => {
  const handleDownload = () => {

    const linkModel = document.createElement('a');
    linkModel.href = modelUrl;
    linkModel.download = 'model.glb';
    document.body.appendChild(linkModel);
    linkModel.click();
    document.body.removeChild(linkModel);

    const linkTexture = document.createElement('a');
    linkTexture.href = textureUrl;
    linkTexture.download = textureUrl.split('/').pop();
    document.body.appendChild(linkTexture);
    linkTexture.click();
    document.body.removeChild(linkTexture);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Model and Texture</button>
    </div>
  );
};

export default DownloadComponent;
