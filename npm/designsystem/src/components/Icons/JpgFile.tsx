import React from 'react';

import { SvgPathProps } from './Icon';

const JpgFile: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M12 39.1h23.999V8.9H12v30.2zm-1.301 1.3H37.3V7.6H10.699v32.8zm14.712-24.898c.5 0 .907.406.907.906a.907.907 0 01-1.813 0c0-.5.406-.906.906-.906zm0 2.812a1.909 1.909 0 001.907-1.906 1.909 1.909 0 00-1.907-1.906c-1.05 0-1.906.855-1.906 1.906s.856 1.906 1.906 1.906zm.122 4.297l2.163-2.218 3.315 4.117h-3.876l-1.602-1.899zM16.99 24.51l4.417-5.239 4.419 5.239H16.99zm10.776-5.623l-2.881 2.956-3.478-4.122-6.57 7.789h18.264l-5.335-6.623zm-.516 10.578c.199-.243.467-.365.805-.365.328 0 .57.076.726.228.158.152.262.369.315.649h.784c-.067-.477-.248-.85-.54-1.117-.292-.267-.725-.4-1.299-.4-.564 0-1.019.179-1.366.538-.346.359-.519.833-.519 1.422v.998c0 .589.183 1.063.549 1.422.366.359.843.539 1.432.539.462 0 .835-.07 1.119-.212.285-.141.493-.301.624-.481v-1.793h-1.75v.598h.952v.959a.854.854 0 01-.338.206 1.758 1.758 0 01-.607.086c-.359 0-.647-.122-.862-.366-.216-.244-.324-.563-.324-.958v-1.004c0-.39.1-.706.299-.949zm-2.757 1.159c-.145.155-.37.233-.671.233h-1.071v-1.688h1.071c.301 0 .526.08.671.24a.868.868 0 01.218.611.847.847 0 01-.218.604zm-.671-2.095h-1.869v4.781h.798v-1.813h1.071c.538 0 .954-.133 1.248-.399.293-.266.439-.627.439-1.085 0-.453-.146-.814-.439-1.082-.294-.268-.71-.402-1.248-.402zm-3.681 3.399c0 .258-.066.458-.195.6a.684.684 0 01-.531.214c-.254 0-.445-.062-.573-.186-.128-.123-.192-.324-.192-.602h-.798c0 .479.138.837.415 1.072.277.235.66.353 1.148.353.455 0 .823-.128 1.103-.384.28-.257.421-.612.421-1.067v-3.399h-.798v3.399z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M12.001 39.1H36V8.9H12.001v30.2zM10.7 40.4h26.601V7.6H10.7v32.8zm14.712-26.898a.906.906 0 110 1.813.906.906 0 010-1.813zm0 2.812a1.908 1.908 0 001.906-1.906 1.908 1.908 0 00-1.906-1.906 1.908 1.908 0 00-1.906 1.906c0 1.051.855 1.906 1.906 1.906zm.122 6.297l2.162-2.218 3.315 4.117h-3.876l-1.601-1.899zM16.99 24.51l4.418-5.239 4.419 5.239H16.99zm10.776-5.623l-2.881 2.956-3.477-4.122-6.57 7.789h18.263l-5.335-6.623zm-.515 10.578c.199-.243.467-.365.804-.365.329 0 .571.076.727.228.157.152.262.369.314.649h.785c-.068-.477-.248-.85-.54-1.117-.292-.267-.726-.4-1.299-.4-.565 0-1.02.179-1.366.538-.346.359-.519.833-.519 1.422v.998c0 .589.183 1.063.549 1.422.365.359.843.539 1.431.539.462 0 .835-.07 1.12-.212.285-.141.493-.301.624-.481v-1.793h-1.75v.598h.952v.959a.86.86 0 01-.338.206 1.764 1.764 0 01-.608.086c-.359 0-.646-.122-.862-.366-.216-.244-.323-.563-.323-.958v-1.004c0-.39.1-.706.299-.949zm-2.757 1.159c-.146.155-.37.233-.672.233h-1.07v-1.688h1.07c.302 0 .526.08.672.24a.873.873 0 01.218.611.852.852 0 01-.218.604zm-.672-2.095h-1.868v4.781h.798v-1.813h1.07c.538 0 .954-.133 1.248-.399.293-.266.44-.627.44-1.085 0-.453-.147-.814-.44-1.082-.294-.268-.71-.402-1.248-.402zm-3.681 3.399c0 .258-.065.458-.195.6a.684.684 0 01-.53.214c-.254 0-.446-.062-.573-.186-.128-.123-.193-.324-.193-.602h-.798c0 .479.139.837.415 1.072.278.235.66.353 1.149.353.455 0 .822-.128 1.102-.384.281-.257.421-.612.421-1.067v-3.399h-.798v3.399z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default JpgFile;
