import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Glasses: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M13.506 16.478c2.486.255 4.857.897 6.482 1.98.298.2.543.43.742.686a4.32 4.32 0 0 1 .967-.34 8.631 8.631 0 0 1 1.93-.204c.665 0 1.34.066 1.93.204.394.093.795.228 1.131.43.21-.29.477-.553.81-.775 1.625-1.084 3.995-1.726 6.481-1.981 2.5-.256 5.196-.13 7.52.387 1.19.265 1.606.395 1.98.513l.063.02c.35.11.71.217 1.944.464v1.275c-.394.079-.653.299-.854.691-.219.425-.35 1.016-.441 1.752-.045.362-.08.741-.114 1.136l-.011.132c-.03.35-.062.711-.1 1.066-.088.793-.22 1.616-.504 2.327a7.512 7.512 0 0 1-2.012 2.872c-1.26 1.108-3.19 2.037-6.092 2.037-2.876 0-4.771-.788-6.024-1.762-1.241-.966-1.795-2.073-2.055-2.594l-.002-.004c-.268-.535-.921-2.058-1.185-3.686-.136-.836-.182-1.796.046-2.673-.135-.114-.42-.253-.878-.361a7.347 7.347 0 0 0-1.633-.17c-.585 0-1.16.059-1.632.17-.3.07-.524.154-.682.235.268.91.223 1.922.081 2.799-.264 1.628-.917 3.15-1.185 3.686l-.002.005c-.26.52-.814 1.627-2.056 2.593-1.252.974-3.147 1.762-6.024 1.762-2.901 0-4.83-.929-6.091-2.037a7.51 7.51 0 0 1-2.012-2.872c-.284-.71-.416-1.534-.504-2.327a44.99 44.99 0 0 1-.1-1.066l-.011-.132a30.461 30.461 0 0 0-.114-1.136c-.092-.736-.222-1.327-.44-1.752-.203-.392-.462-.612-.855-.691v-1.275c1.234-.247 1.593-.354 1.944-.464l.062-.02c.374-.118.79-.248 1.98-.513 2.325-.516 5.02-.643 7.52-.387Zm-.132 1.293a23.739 23.739 0 0 0-5.816.125c-2.34.61-3.003 1.82-2.92 4.002.025.235.045.471.066.706l.011.132.044.493c.085.658.208 1.386.354 2.19.036.118.075.231.118.34a6.21 6.21 0 0 0 1.663 2.377c1.015.892 2.635 1.714 5.233 1.714 2.624 0 4.229-.713 5.226-1.489 1.006-.781 1.453-1.671 1.693-2.152.232-.464.829-1.858 1.065-3.313.245-1.514.055-2.756-.844-3.356-1.375-.916-3.505-1.524-5.893-1.769Zm28.999 7.647c.146-.803.269-1.53.354-2.19.015-.162.03-.325.043-.49v-.002l.012-.132c.02-.235.041-.471.065-.706.084-2.182-.58-3.392-2.92-4.002a23.739 23.739 0 0 0-5.815-.125c-2.389.245-4.519.853-5.893 1.77-.899.599-1.09 1.84-.844 3.355.236 1.455.832 2.849 1.065 3.313.24.48.687 1.37 1.692 2.152.998.776 2.603 1.489 5.226 1.489 2.598 0 4.22-.822 5.234-1.714a6.211 6.211 0 0 0 1.663-2.378c.043-.108.082-.221.118-.34Z"
      clipRule="evenodd"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M10.387 12.5a.5.5 0 0 1 .395.18l5 6-.768.64-4.599-5.518-6.574 8.628.103-.032.062-.02c.374-.117.79-.248 1.98-.512 2.325-.517 5.02-.644 7.52-.388 2.486.255 4.857.897 6.482 1.981.298.199.543.43.742.685a4.37 4.37 0 0 1 .967-.34 8.631 8.631 0 0 1 1.93-.204c.665 0 1.34.066 1.93.205.394.092.795.228 1.131.43.21-.291.477-.554.81-.776 1.625-1.084 3.995-1.726 6.481-1.98 2.5-.257 5.196-.13 7.52.387 1.101.244 1.54.374 1.895.486l-6.514-8.55-4.598 5.518-.768-.64 5-6a.5.5 0 0 1 .781.017l7.663 10.058.528.108v1.274c-.394.08-.653.3-.854.692-.219.424-.35 1.016-.441 1.752-.045.361-.08.74-.114 1.135l-.011.132c-.03.35-.062.712-.1 1.067-.088.793-.22 1.616-.504 2.326a7.512 7.512 0 0 1-2.012 2.872c-1.26 1.108-3.19 2.037-6.092 2.037-2.876 0-4.771-.788-6.024-1.762-1.241-.965-1.795-2.072-2.055-2.593l-.002-.004c-.268-.536-.921-2.059-1.185-3.687-.136-.836-.182-1.796.046-2.672-.135-.115-.42-.254-.878-.362a7.347 7.347 0 0 0-1.633-.17c-.585 0-1.16.059-1.632.17-.3.07-.524.154-.682.236.268.91.223 1.922.081 2.798-.264 1.628-.917 3.151-1.185 3.687l-.002.004c-.26.52-.814 1.627-2.056 2.593-1.252.974-3.147 1.762-6.024 1.762-2.901 0-4.83-.929-6.091-2.037a7.51 7.51 0 0 1-2.012-2.872c-.284-.71-.416-1.533-.504-2.326a44.99 44.99 0 0 1-.1-1.066l-.011-.133a30.44 30.44 0 0 0-.114-1.135c-.092-.736-.222-1.328-.44-1.752-.203-.393-.462-.613-.855-.692v-1.274l.301-.061L10 12.697a.5.5 0 0 1 .387-.197ZM7.558 22.896a23.739 23.739 0 0 1 5.816-.124c2.388.245 4.518.853 5.893 1.769.899.599 1.09 1.841.844 3.355-.236 1.455-.833 2.849-1.065 3.313-.24.481-.687 1.371-1.693 2.153-.997.776-2.602 1.488-5.226 1.488-2.598 0-4.218-.821-5.233-1.713a6.21 6.21 0 0 1-1.663-2.378 4.14 4.14 0 0 1-.118-.34 45.06 45.06 0 0 1-.354-2.19 98.04 98.04 0 0 1-.044-.492l-.011-.133c-.02-.234-.041-.47-.065-.706-.084-2.181.579-3.392 2.92-4.002Zm35.17 5.333a45.102 45.102 0 0 1-.355 2.19 4.148 4.148 0 0 1-.118.34 6.211 6.211 0 0 1-1.663 2.378c-1.015.892-2.636 1.713-5.234 1.713-2.623 0-4.228-.712-5.226-1.488-1.005-.782-1.452-1.672-1.692-2.153-.233-.464-.83-1.858-1.065-3.313-.246-1.514-.055-2.756.844-3.355 1.374-.916 3.504-1.524 5.893-1.77a23.739 23.739 0 0 1 5.816.125c2.34.61 3.003 1.82 2.92 4.002-.025.235-.046.472-.066.706l-.011.133-.044.492Z"
      clipRule="evenodd"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default Glasses;
