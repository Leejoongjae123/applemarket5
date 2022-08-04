import React from 'react';
import {useEffect, useState} from 'react'
import Upload from '../src/components/Upload'
import GNB from '../src/components/GNB';
export default function upload () {
  return (
    <div>
      <GNB></GNB>
      <Upload></Upload>
    </div>
  );
}
