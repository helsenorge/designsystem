import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const CalendarSave: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M9.51 34.649h30.151V18.298H9.51v16.351zm0-23.811v6.06h30.151v-6.06h-3.846v1.433a1.957 1.957 0 01-1.954 1.954h-.66a1.957 1.957 0 01-1.954-1.954v-1.433H17.802v1.433a1.956 1.956 0 01-1.954 1.954h-.66a1.957 1.957 0 01-1.954-1.954v-1.433H9.51zm5.124 1.433c0 .306.249.554.554.554h.66a.554.554 0 00.554-.554V8.216a.554.554 0 00-.554-.553h-.66a.554.554 0 00-.554.553v4.055zm18.013 0c0 .306.248.554.554.554h.66a.554.554 0 00.554-.554V8.216a.554.554 0 00-.554-.553h-.66a.554.554 0 00-.554.553v4.055zm8.414-2.833v26.611H8.11V9.438h5.124V8.216c0-1.077.877-1.954 1.954-1.954h.66c1.078 0 1.954.877 1.954 1.954v1.222h13.445V8.216c0-1.077.877-1.954 1.954-1.954h.66c1.077 0 1.954.877 1.954 1.954v1.222h5.246zM29.026 26.396l.969 1.01-5.391 5.177-5.423-5.088.958-1.021 3.746 3.514v-7.142h1.4v7.141l3.741-3.591z" />
  );

  const normalHover = (
    <path d="M27.136 34.649l2.274-2.184-.97-1.01-3.325 3.194H24.7v-6.744h-1.4v6.744h-.425l-3.321-3.116-.958 1.02 2.233 2.096H8.925V18.298h10.137l4.957 4.65 4.843-4.65h10.213v16.35H27.136zM23.3 18.298v2.069l-2.248-2.07H23.3zm1.4 0h2.175L24.7 20.362v-2.064zm-12.051-7.46v1.433c0 1.077.877 1.954 1.954 1.954h.66a1.957 1.957 0 001.954-1.954v-1.433h13.444v1.433c0 1.077.877 1.954 1.955 1.954h.66a1.957 1.957 0 001.954-1.954v-1.433h3.845v6.06H8.925v-6.06h3.724zm1.4-2.622c0-.305.248-.553.554-.553h.66c.306 0 .554.248.554.553v4.055a.554.554 0 01-.554.554h-.66a.554.554 0 01-.554-.554V8.216zm18.013 0c0-.305.248-.553.554-.553h.66c.305 0 .554.248.554.553v4.055a.555.555 0 01-.554.554h-.66a.554.554 0 01-.554-.554V8.216zm3.168 1.222V8.216a1.957 1.957 0 00-1.954-1.954h-.66a1.957 1.957 0 00-1.955 1.954v1.222H17.217V8.216a1.957 1.957 0 00-1.954-1.954h-.66a1.957 1.957 0 00-1.954 1.954v1.222H7.524v26.61h32.952V9.439H35.23z" />
  );

  const xSmall = (
    <path d="M9.51 34.649h30.151V18.298H9.51v16.351zm0-23.811v6.06h30.151v-6.06h-3.846v1.433a1.957 1.957 0 01-1.954 1.954h-.66a1.957 1.957 0 01-1.954-1.954v-1.433H17.802v1.433a1.956 1.956 0 01-1.954 1.954h-.66a1.957 1.957 0 01-1.954-1.954v-1.433H9.51zm5.124 1.433c0 .306.249.554.554.554h.66a.554.554 0 00.554-.554V8.216a.554.554 0 00-.554-.553h-.66a.554.554 0 00-.554.553v4.055zm18.013 0c0 .306.248.554.554.554h.66a.554.554 0 00.554-.554V8.216a.554.554 0 00-.554-.553h-.66a.554.554 0 00-.554.553v4.055zm8.414-2.833v26.611H8.11V9.438h5.124V8.216c0-1.077.877-1.954 1.954-1.954h.66c1.078 0 1.954.877 1.954 1.954v1.222h13.445V8.216c0-1.077.877-1.954 1.954-1.954h.66c1.077 0 1.954.877 1.954 1.954v1.222h5.246zM29.026 26.396l.969 1.01-5.391 5.177-5.423-5.088.958-1.021 3.746 3.514v-7.142h1.4v7.141l3.741-3.591z" />
  );

  const xSmallHover = (
    <path d="M27.136 34.649l2.274-2.184-.97-1.01-3.325 3.194H24.7v-6.744h-1.4v6.744h-.425l-3.321-3.116-.958 1.02 2.233 2.096H8.925V18.298h10.137l4.957 4.65 4.843-4.65h10.213v16.35H27.136zM23.3 18.298v2.069l-2.248-2.07H23.3zm1.4 0h2.175L24.7 20.362v-2.064zm-12.051-7.46v1.433c0 1.077.877 1.954 1.954 1.954h.66a1.957 1.957 0 001.954-1.954v-1.433h13.444v1.433c0 1.077.877 1.954 1.955 1.954h.66a1.957 1.957 0 001.954-1.954v-1.433h3.845v6.06H8.925v-6.06h3.724zm1.4-2.622c0-.305.248-.553.554-.553h.66c.306 0 .554.248.554.553v4.055a.554.554 0 01-.554.554h-.66a.554.554 0 01-.554-.554V8.216zm18.013 0c0-.305.248-.553.554-.553h.66c.305 0 .554.248.554.553v4.055a.555.555 0 01-.554.554h-.66a.554.554 0 01-.554-.554V8.216zm3.168 1.222V8.216a1.957 1.957 0 00-1.954-1.954h-.66a1.957 1.957 0 00-1.955 1.954v1.222H17.217V8.216a1.957 1.957 0 00-1.954-1.954h-.66a1.957 1.957 0 00-1.954 1.954v1.222H7.524v26.61h32.952V9.439H35.23z" />
  );

  return getIcon(size, isHovered, normal, normalHover, xSmall, xSmallHover);
};

export default CalendarSave;
