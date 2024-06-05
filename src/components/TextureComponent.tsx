import React from 'react';

interface TextureProps {
    handleChangeTexture: Function;
}

const TextureComponent: React.FC<TextureProps> = ({ handleChangeTexture }) => {
  return (
    <div>
      <button onClick={handleChangeTexture}>Change Texture</button>
    </div>
  );
};

export default TextureComponent;
