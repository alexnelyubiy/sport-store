import React from 'react';
import Master from 'scenes/Master';

const displayName = 'ConfirmScene';

function ConfirmScene() {
  return (
    <Master title="Confirmation">
      <div>
        Confirmation will be here!
      </div>
    </Master>
  );
}

ConfirmScene.displayName = displayName;

export default ConfirmScene;
