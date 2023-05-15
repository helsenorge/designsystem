import React from 'react';

import { SvgPathProps, getIcon } from './Icon';

const FallingLeaf: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M26.755 4.73a.65.65 0 1 0-.333 1.256c.803.213 1.63.66 2.428 1.295a.65.65 0 0 0 .81-1.017C28.759 5.548 27.773 5 26.755 4.73ZM45.44 5.865a.65.65 0 0 0-1.076-.73c-.251.371-.54.783-.862 1.225a.65.65 0 0 0 1.05.767c.332-.455.63-.88.888-1.262Zm-21.525.323a.65.65 0 1 0-.577-1.165c-.493.244-.96.582-1.395 1.017a4.987 4.987 0 0 0-.957 1.353.65.65 0 0 0 1.17.568c.183-.377.42-.715.706-1.002a4.012 4.012 0 0 1 1.053-.771Zm7.963 2.377a.65.65 0 1 0-1.036.784c.58.768 1.086 1.613 1.483 2.484a.65.65 0 1 0 1.183-.539 14.544 14.544 0 0 0-1.63-2.729Zm10.752.991a.65.65 0 1 0-.986-.846 32.383 32.383 0 0 1-2.042 2.18.65.65 0 0 0 .904.933 33.706 33.706 0 0 0 2.125-2.267Zm-20.906.89a.65.65 0 1 0-1.296.104 7.02 7.02 0 0 0 .964 3.015.65.65 0 1 0 1.118-.664 5.72 5.72 0 0 1-.786-2.455Zm16.421 3.42a.65.65 0 1 0-.788-1.034 18.67 18.67 0 0 1-2.466 1.603.65.65 0 1 0 .616 1.145 19.959 19.959 0 0 0 2.638-1.714Z" />
      <path d="M34.452 14.362a.65.65 0 0 0-1.285.199c.074.478.104.943.086 1.388a9 9 0 0 1-.323 2.044.65.65 0 0 0 1.253.346c.203-.734.336-1.513.369-2.338a8.517 8.517 0 0 0-.1-1.64Zm-10.162.416a.65.65 0 1 0-.727 1.077 8.338 8.338 0 0 0 2.876 1.212.65.65 0 1 0 .282-1.268 7.042 7.042 0 0 1-2.43-1.021Z" />
      <path d="M33.014 15.99a.65.65 0 0 0-.805-.444c-.462.133-.93.238-1.405.311-.481.075-.94.122-1.379.144a.65.65 0 0 0 .067 1.299c.485-.025.988-.077 1.51-.158.533-.082 1.055-.2 1.567-.348a.65.65 0 0 0 .445-.804Zm-.812 6.528a.65.65 0 0 0-1.091-.706c-.322.496-.645.96-.956 1.406l-.287.412a.65.65 0 0 0 1.069.74l.273-.393.002-.003c.314-.45.655-.938.99-1.456Z" />
      <path
        fillRule="evenodd"
        d="M28.197 27.443c1.086 2.3 1.016 5.207-.035 7.89a12.966 12.966 0 0 1-6.25 6.84c-3.425 1.722-8.071 1.57-11.835.992-1.9-.292-3.614-.7-4.894-1.06a28.39 28.39 0 0 1-1.573-.487 11.13 11.13 0 0 1-.5-.184 2.302 2.302 0 0 1-.344-.164.65.65 0 0 1 .002-1.1c.876-.551 3.756-2.705 5.975-6.207 2.292-3.616 4.802-6.757 8.675-7.971 3.7-1.16 7.491-.912 9.921.461l.127-.137c.517-.56.961-1.042 1.374-1.45a.65.65 0 1 1 .914.924c-.368.364-.785.816-1.279 1.351l-.278.302Zm-4.272 4.284a71.171 71.171 0 0 1-2.304 2.02c-.333.28-.675.551-1.023.812.288.913.092 1.949-.159 2.754-.311 1.003-.785 1.89-.977 2.25l-.021.04a.65.65 0 0 1-1.147-.612l.016-.031c.19-.354.614-1.15.888-2.033.179-.576.266-1.103.237-1.54a36.848 36.848 0 0 1-3.048 1.835c.077.524-.074 1.052-.227 1.443-.181.461-.453.935-.635 1.253-.057.1-.105.183-.139.247a.65.65 0 0 1-1.147-.612c.063-.118.133-.24.205-.366.174-.304.363-.633.506-.997a3 3 0 0 0 .091-.267l-.069.035a78.6 78.6 0 0 1-2.753 1.3l-.178.08c-.687.312-1.175.532-1.442.682a.65.65 0 1 1-.636-1.134c.319-.179.86-.423 1.512-.718l.207-.094c.762-.345 1.692-.77 2.709-1.279l.066-.033a2.162 2.162 0 0 0-.494-.164c-.372-.079-.738-.082-1.099-.086-.08 0-.158-.002-.236-.003a.65.65 0 0 1 .026-1.3l.184.002c.36.003.882.006 1.396.116.507.108 1.053.325 1.514.763a35.237 35.237 0 0 0 3.104-1.879c-.45-.42-1.076-.701-1.755-.883a9.073 9.073 0 0 0-2.094-.28.65.65 0 1 1 .026-1.3c.41.008 1.38.049 2.405.324.836.224 1.792.627 2.486 1.37.294-.223.583-.453.865-.69a69.854 69.854 0 0 0 2.437-2.143c-.587-.423-1.395-.602-2.27-.643a11.97 11.97 0 0 0-1.533.041l-.351.031a8.13 8.13 0 0 1-.745.05.65.65 0 1 1 .026-1.3 5.4 5.4 0 0 0 .484-.034l.48-.043a13.377 13.377 0 0 1 1.7-.044c1.02.048 2.243.271 3.167 1.04a64.804 64.804 0 0 0 2.242-2.27c-2.055-1.023-5.305-1.243-8.615-.205-3.395 1.064-5.691 3.838-7.966 7.427a23.622 23.622 0 0 1-5.353 5.881c.299.096.65.202 1.047.314 1.238.348 2.9.743 4.74 1.026 3.718.572 8.013.66 11.053-.868a11.667 11.667 0 0 0 5.623-6.153c.874-2.23.96-4.54.274-6.377a66.666 66.666 0 0 1-2.235 2.247c.194.431.257.902.25 1.354-.01.634-.161 1.289-.352 1.881-.355 1.103-.89 2.097-1.101 2.491l-.042.078a.65.65 0 1 1-1.147-.612l.041-.077c.212-.394.695-1.294 1.012-2.279.17-.527.281-1.047.289-1.504.002-.12-.003-.23-.015-.334Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path d="M45.44 5.864a.65.65 0 1 0-1.076-.729c-.251.37-.54.783-.862 1.224a.65.65 0 1 0 1.05.768c.332-.455.63-.88.888-1.263Zm-18.772-.991a.65.65 0 0 0-.323 1.26c.782.2 1.582.62 2.356 1.22a.65.65 0 0 0 .795-1.029c-.878-.68-1.835-1.196-2.828-1.45ZM23.896 6.3a.65.65 0 0 0-.525-1.19 5.528 5.528 0 0 0-1.395.9c-.433.376-.78.826-1.043 1.322a.65.65 0 1 0 1.149.608c.192-.364.442-.685.747-.95.353-.307.71-.532 1.067-.69Zm7.777 2.217a.65.65 0 0 0-1.022.803 13.99 13.99 0 0 1 1.497 2.368.65.65 0 0 0 1.162-.582 15.32 15.32 0 0 0-1.637-2.589ZM42.63 9.556a.65.65 0 0 0-.986-.846 32.41 32.41 0 0 1-2.042 2.18.65.65 0 1 0 .904.933 33.674 33.674 0 0 0 2.125-2.267Zm-20.996.846a.65.65 0 1 0-1.295.116 7.015 7.015 0 0 0 1.007 3.017.65.65 0 1 0 1.11-.677 5.715 5.715 0 0 1-.822-2.456Zm16.511 3.464a.65.65 0 0 0-.788-1.034 18.664 18.664 0 0 1-2.466 1.603.649.649 0 0 0-.328.439 11.29 11.29 0 0 0-.18-.884.65.65 0 0 0-1.263.309c.113.458.191.911.233 1.351.013.142.032.298.051.456l.01.079c.022.188.045.385.063.59a.65.65 0 0 0 1.295-.114 19.94 19.94 0 0 0-.067-.631l-.01-.083a14.93 14.93 0 0 1-.048-.42 10.18 10.18 0 0 0-.023-.217l.003.005a.65.65 0 0 0 .88.265 19.98 19.98 0 0 0 2.638-1.714Zm-13.881.875a.65.65 0 0 0-.728 1.077 8.506 8.506 0 0 0 2.88 1.23.65.65 0 1 0 .29-1.267 7.208 7.208 0 0 1-2.442-1.04Zm8.75 1.249a.65.65 0 0 0-.805-.445c-.462.134-.93.239-1.405.312-.482.075-.943.121-1.384.143a.65.65 0 1 0 .063 1.298 14.69 14.69 0 0 0 1.519-.156c.533-.082 1.055-.2 1.567-.348a.65.65 0 0 0 .445-.804Zm1.583 3.163a.65.65 0 0 0-1.248-.363 3.056 3.056 0 0 1-.39.85.65.65 0 0 0 1.082.72c.26-.39.438-.799.556-1.207Z" />
      <path
        fillRule="evenodd"
        d="M31.4 24.041c1.302 2.184 1.514 5.084.728 7.856a12.967 12.967 0 0 1-5.558 7.413c-3.242 2.044-7.882 2.344-11.684 2.132a41.982 41.982 0 0 1-4.974-.58 28.299 28.299 0 0 1-1.613-.333 12.8 12.8 0 0 1-.515-.135 2.299 2.299 0 0 1-.358-.13.65.65 0 0 1-.105-1.095c.82-.633 3.477-3.055 5.347-6.756 1.93-3.821 4.125-7.19 7.862-8.774 3.572-1.513 7.369-1.632 9.92-.5l.113-.148c.46-.608.856-1.13 1.226-1.576a.65.65 0 0 1 1 .83 43.69 43.69 0 0 0-1.142 1.47l-.248.326Zm-3.838 4.679a70.92 70.92 0 0 1-2.097 2.233c-.305.311-.62.614-.94.907.374.881.28 1.93.108 2.756-.213 1.028-.598 1.957-.755 2.334l-.017.041a.65.65 0 0 1-1.2-.498l.012-.032c.154-.37.5-1.204.687-2.109.123-.59.159-1.123.088-1.556a36.7 36.7 0 0 1-2.857 2.122c.128.514.029 1.054-.086 1.458-.136.477-.36.975-.51 1.309a6.327 6.327 0 0 0-.115.259.65.65 0 1 1-1.201-.498c.051-.124.109-.252.169-.384.143-.32.3-.666.407-1.042.028-.1.05-.19.065-.273l-.065.04a76.787 76.787 0 0 1-2.615 1.561l-.169.097c-.655.377-1.119.644-1.37.818a.65.65 0 1 1-.742-1.066c.3-.21.815-.505 1.435-.862l.197-.113a74.39 74.39 0 0 0 2.572-1.535l.064-.04a2.165 2.165 0 0 0-.508-.115c-.379-.043-.744-.011-1.103.02l-.235.02a.65.65 0 1 1-.1-1.296l.183-.016c.359-.032.878-.08 1.4-.02.516.058 1.08.221 1.582.613a35.202 35.202 0 0 0 2.907-2.17c-.488-.374-1.139-.595-1.832-.71a9.077 9.077 0 0 0-2.112-.076.65.65 0 1 1-.1-1.296c.41-.032 1.379-.085 2.426.09.854.142 1.844.45 2.608 1.123.27-.251.536-.508.793-.77a69.827 69.827 0 0 0 2.218-2.37c-.625-.364-1.447-.464-2.321-.42-.546.027-1.073.108-1.522.19-.115.02-.232.043-.347.064a8.327 8.327 0 0 1-.737.122.65.65 0 0 1-.1-1.297c.097-.007.249-.036.48-.08l.473-.089a13.37 13.37 0 0 1 1.688-.209c1.019-.05 2.259.053 3.252.728a64.69 64.69 0 0 0 2.013-2.476c-2.145-.82-5.4-.724-8.596.63-3.275 1.387-5.293 4.37-7.209 8.162a23.624 23.624 0 0 1-4.76 6.372c.308.067.668.138 1.074.211 1.266.227 2.958.46 4.817.563 3.755.208 8.04-.12 10.917-1.934a11.667 11.667 0 0 0 5.001-6.668c.654-2.305.516-4.611-.344-6.374a66.587 66.587 0 0 1-2.007 2.454c.234.41.343.872.379 1.323.05.632-.035 1.298-.168 1.906-.247 1.132-.682 2.173-.855 2.586l-.034.081a.65.65 0 1 1-1.2-.497l.033-.08c.172-.414.566-1.356.786-2.367.118-.541.179-1.07.142-1.525a2.572 2.572 0 0 0-.047-.33Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default FallingLeaf;
