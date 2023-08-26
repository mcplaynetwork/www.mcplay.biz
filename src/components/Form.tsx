import React from "react";
import {useColorMode} from '@docusaurus/theme-common';

export default function Form() {
  const {colorMode} = useColorMode();
  return (
    <div>
      <script async id="7fa49584-20f8-4084-8c52-fea7b660ce17" data-yt-url="https://support.alflag.org" src="https://support.alflag.org/static/simplified/form/form-entry.js" data-theme={colorMode === 'dark' ? 'dark' : 'light'} data-lang="ja"></script>
    </div>
  );
}
