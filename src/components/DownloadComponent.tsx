import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface DownloadProps {
  modelUrl: string;
  textureUrl: string;
}

const DownloadComponent: React.FC<DownloadProps> = ({ modelUrl, textureUrl }) => {
  const handleDownload = async () => {
    const zip = new JSZip();

    const modelResponse = await fetch(modelUrl);
    const modelBlob = await modelResponse.blob();
    zip.file('model.glb', modelBlob);

    const textureResponse = await fetch(textureUrl);
    const textureBlob = await textureResponse.blob();
    zip.file(textureUrl.split('/').pop(), textureBlob);

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'model-and-texture.zip');
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Model and Texture</button>
    </div>
  );
};

export default DownloadComponent;
