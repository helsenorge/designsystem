import React from 'react';
import {SvgPathProps} from './Icon';

const Contacts: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M19.267,32.525 L31.271,32.525 L31.271,31.525 L19.267,31.525 L19.267,32.525 Z M19.267,29.355 L31.271,29.355 L31.271,28.355 L19.267,28.355 L19.267,29.355 Z M24.669,22.016 L25.868,22.016 L25.868,19.087 L28.797,19.087 L28.797,17.887 L25.868,17.887 L25.868,14.959 L24.669,14.959 L24.669,17.887 L21.74,17.887 L21.74,19.087 L24.669,19.087 L24.669,22.016 Z M36.561,39.156 L13.977,39.156 L13.977,34.385 L14.226,34.385 C15.081,34.385 15.777,33.689 15.777,32.834 C15.777,31.979 15.081,31.283 14.226,31.283 L13.977,31.283 L13.977,25.202 L14.226,25.202 C15.081,25.202 15.777,24.506 15.777,23.65 C15.777,22.795 15.081,22.099 14.226,22.099 L13.977,22.099 L13.977,16.018 L14.226,16.018 C15.081,16.018 15.777,15.322 15.777,14.467 C15.777,13.612 15.081,12.916 14.226,12.916 L13.977,12.916 L13.977,8.594 L36.561,8.594 L36.561,39.156 Z M10.878,33.428 C10.55,33.428 10.283,33.161 10.283,32.834 C10.283,32.506 10.55,32.24 10.878,32.24 L14.226,32.24 C14.554,32.24 14.82,32.506 14.82,32.834 C14.82,33.161 14.554,33.428 14.226,33.428 L10.878,33.428 Z M11.975,37.709 L12.676,37.709 L12.676,34.385 L11.975,34.385 L11.975,37.709 Z M11.975,31.283 L12.676,31.283 L12.676,25.201 L11.975,25.201 L11.975,31.283 Z M10.878,24.245 C10.55,24.245 10.283,23.978 10.283,23.65 C10.283,23.323 10.55,23.057 10.878,23.057 L14.226,23.057 C14.554,23.057 14.82,23.323 14.82,23.651 C14.82,23.978 14.554,24.245 14.226,24.245 L10.878,24.245 Z M11.975,22.099 L12.676,22.099 L12.676,16.017 L11.975,16.017 L11.975,22.099 Z M10.878,15.061 C10.55,15.061 10.283,14.795 10.283,14.467 C10.283,14.14 10.55,13.873 10.878,13.873 L14.226,13.873 C14.554,13.873 14.82,14.14 14.82,14.467 C14.82,14.795 14.554,15.061 14.226,15.061 L10.878,15.061 Z M11.976,12.915 L12.677,12.915 L12.677,10.04 L11.976,10.04 L11.976,12.915 Z M37.851,7.294 L13.337,7.294 L12.676,7.305 L12.676,9.087 L11.019,9.094 L11.019,12.916 L10.878,12.916 C10.023,12.916 9.327,13.612 9.327,14.467 C9.327,15.322 10.023,16.018 10.878,16.018 L11.019,16.018 L11.019,22.099 L10.878,22.099 C10.023,22.099 9.327,22.795 9.327,23.651 C9.327,24.506 10.023,25.202 10.878,25.202 L11.019,25.202 L11.019,31.283 L10.878,31.283 C10.023,31.283 9.327,31.979 9.327,32.834 C9.327,33.689 10.023,34.385 10.878,34.385 L11.019,34.385 L11.019,38.178 L11.029,38.666 L12.676,38.666 L12.676,39.796 L12.687,40.455 L37.2,40.455 L37.86,40.446 L37.86,7.954 L37.851,7.294 Z M25.269,12.599 C28.515,12.599 31.156,15.241 31.156,18.487 C31.156,21.734 28.515,24.375 25.269,24.375 C22.022,24.375 19.38,21.734 19.38,18.487 C19.38,15.241 22.022,12.599 25.269,12.599 L25.269,12.599 Z M25.269,25.576 C29.177,25.576 32.357,22.396 32.357,18.487 C32.357,14.579 29.177,11.399 25.269,11.399 C21.36,11.399 18.181,14.579 18.181,18.487 C18.181,22.396 21.36,25.576 25.269,25.576 L25.269,25.576 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M19.266,32.525 L31.27,32.525 L31.27,31.525 L19.266,31.525 L19.266,32.525 Z M24.669,23.016 L25.868,23.016 L25.868,19.087 L29.797,19.087 L29.797,17.887 L25.868,17.887 L25.868,13.959 L24.669,13.959 L24.669,17.887 L20.74,17.887 L20.74,19.087 L24.669,19.087 L24.669,23.016 Z M25.268,12.599 C28.515,12.599 31.156,15.241 31.156,18.487 C31.156,21.734 28.515,24.375 25.268,24.375 C22.022,24.375 19.381,21.734 19.381,18.487 C19.381,15.241 22.022,12.599 25.268,12.599 L25.268,12.599 Z M25.268,25.576 C29.177,25.576 32.356,22.396 32.356,18.487 C32.356,14.579 29.177,11.399 25.268,11.399 C21.36,11.399 18.18,14.579 18.18,18.487 C18.18,22.396 21.36,25.576 25.268,25.576 L25.268,25.576 Z M36.56,39.156 L13.976,39.156 L13.976,34.385 L14.226,34.385 C15.081,34.385 15.777,33.689 15.777,32.834 C15.777,31.979 15.081,31.283 14.226,31.283 L13.976,31.283 L13.976,25.202 L14.226,25.202 C15.081,25.202 15.777,24.506 15.777,23.65 C15.777,22.795 15.081,22.099 14.226,22.099 L13.976,22.099 L13.976,16.018 L14.226,16.018 C15.081,16.018 15.777,15.322 15.777,14.467 C15.777,13.612 15.081,12.916 14.226,12.916 L13.976,12.916 L13.976,8.594 L36.56,8.594 L36.56,39.156 Z M10.878,33.428 C10.55,33.428 10.283,33.161 10.283,32.834 C10.283,32.506 10.55,32.24 10.878,32.24 L14.226,32.24 C14.553,32.24 14.82,32.506 14.82,32.834 C14.82,33.161 14.553,33.428 14.226,33.428 L10.878,33.428 Z M11.976,37.709 L12.677,37.709 L12.677,34.385 L11.976,34.385 L11.976,37.709 Z M11.976,31.283 L12.677,31.283 L12.677,25.201 L11.976,25.201 L11.976,31.283 Z M10.878,24.245 C10.55,24.245 10.283,23.978 10.283,23.65 C10.283,23.323 10.55,23.057 10.878,23.057 L14.226,23.057 C14.553,23.057 14.82,23.323 14.82,23.651 C14.82,23.978 14.553,24.245 14.226,24.245 L10.878,24.245 Z M11.976,22.099 L12.677,22.099 L12.677,16.017 L11.976,16.017 L11.976,22.099 Z M10.878,15.061 C10.55,15.061 10.283,14.795 10.283,14.467 C10.283,14.14 10.55,13.873 10.878,13.873 L14.226,13.873 C14.553,13.873 14.82,14.14 14.82,14.467 C14.82,14.795 14.553,15.061 14.226,15.061 L10.878,15.061 Z M11.975,12.915 L12.676,12.915 L12.676,10.04 L11.975,10.04 L11.975,12.915 Z M37.85,7.294 L13.337,7.294 L12.677,7.305 L12.677,9.087 L11.019,9.094 L11.019,12.916 L10.878,12.916 C10.023,12.916 9.327,13.612 9.327,14.467 C9.327,15.322 10.023,16.018 10.878,16.018 L11.019,16.018 L11.019,22.099 L10.878,22.099 C10.023,22.099 9.327,22.795 9.327,23.651 C9.327,24.506 10.023,25.202 10.878,25.202 L11.019,25.202 L11.019,31.283 L10.878,31.283 C10.023,31.283 9.327,31.979 9.327,32.834 C9.327,33.689 10.023,34.385 10.878,34.385 L11.019,34.385 L11.019,38.178 L11.029,38.666 L12.677,38.666 L12.677,39.796 L12.686,40.455 L37.2,40.455 L37.86,40.446 L37.86,7.954 L37.85,7.294 Z M19.266,29.355 L31.27,29.355 L31.27,28.355 L19.266,28.355 L19.266,29.355 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M25.3932632,12.7561263 C28.6218947,12.7561263 31.2492632,15.3834947 31.2492632,18.6121263 C31.2492632,21.8420211 28.6218947,24.4681263 25.3932632,24.4681263 C22.1633684,24.4681263 19.5372632,21.8420211 19.5372632,18.6121263 C19.5372632,15.3834947 22.1633684,12.7561263 25.3932632,12.7561263 M25.3932632,25.7312842 C29.3191579,25.7312842 32.5124211,22.5380211 32.5124211,18.6121263 C32.5124211,14.6862316 29.3191579,11.4929684 25.3932632,11.4929684 C21.4673684,11.4929684 18.2741053,14.6862316 18.2741053,18.6121263 C18.2741053,22.5380211 21.4673684,25.7312842 25.3932632,25.7312842 M31.3957895,31.6446316 L31.3957895,32.6551579 L19.392,32.6551579 L19.392,31.6446316 L31.3957895,31.6446316 Z M31.3957895,28.4741053 L31.3957895,29.4846316 L19.392,29.4846316 L19.392,28.4741053 L31.3957895,28.4741053 Z M26.0248421,15.0837474 L26.0248421,17.9814316 L28.9212632,17.9814316 L28.9212632,19.2445895 L26.0248421,19.2445895 L26.0248421,22.1410105 L24.7616842,22.1410105 L24.7616842,19.2445895 L21.8652632,19.2445895 L21.8652632,17.9814316 L24.7616842,17.9814316 L24.7616842,15.0837474 L26.0248421,15.0837474 Z M36.7037053,39.2991158 L14.0830737,39.2991158 L14.0830737,34.5370105 L14.3508632,34.5370105 C15.2211789,34.5370105 15.9285474,33.8296421 15.9285474,32.9593263 C15.9285474,32.0890105 15.2211789,31.3816421 14.3508632,31.3816421 L14.0830737,31.3816421 L14.0830737,25.3525895 L14.3508632,25.3525895 C15.2211789,25.3525895 15.9285474,24.6452211 15.9285474,23.7749053 C15.9285474,22.9045895 15.2211789,22.1972211 14.3508632,22.1972211 L14.0830737,22.1972211 L14.0830737,16.1694316 L14.3508632,16.1694316 C15.2211789,16.1694316 15.9285474,15.4620632 15.9285474,14.5917474 C15.9285474,13.7214316 15.2211789,13.0140632 14.3508632,13.0140632 L14.0830737,13.0140632 L14.0830737,8.70037895 L36.7037053,8.70037895 L36.7037053,39.2991158 Z M12.1264421,37.8073263 L12.8186526,37.8073263 L12.8186526,34.5370105 L12.1264421,34.5370105 L12.1264421,37.8073263 Z M10.4350737,32.9593263 C10.4350737,32.6460632 10.6902316,32.3921684 11.0022316,32.3921684 L14.3508632,32.3921684 C14.6628632,32.3921684 14.9180211,32.6460632 14.9180211,32.9593263 C14.9180211,33.2725895 14.6628632,33.5264842 14.3508632,33.5264842 L11.0022316,33.5264842 C10.6902316,33.5264842 10.4350737,33.2725895 10.4350737,32.9593263 L10.4350737,32.9593263 Z M12.1264421,31.3803789 L12.8186526,31.3803789 L12.8186526,25.3525895 L12.1264421,25.3525895 L12.1264421,31.3803789 Z M10.4350737,23.7749053 C10.4350737,23.4629053 10.6902316,23.2077474 11.0022316,23.2077474 L14.3508632,23.2077474 C14.6628632,23.2077474 14.9180211,23.4629053 14.9180211,23.7749053 C14.9180211,24.0881684 14.6628632,24.3433263 14.3508632,24.3433263 L11.0022316,24.3433263 C10.6902316,24.3433263 10.4350737,24.0881684 10.4350737,23.7749053 L10.4350737,23.7749053 Z M12.1264421,22.1972211 L12.8186526,22.1972211 L12.8186526,16.1694316 L12.1264421,16.1694316 L12.1264421,22.1972211 Z M10.4350737,14.5917474 C10.4350737,14.2784842 10.6902316,14.0245895 11.0022316,14.0245895 L14.3508632,14.0245895 C14.6628632,14.0245895 14.9180211,14.2784842 14.9180211,14.5917474 C14.9180211,14.9050105 14.6628632,15.1589053 14.3508632,15.1589053 L11.0022316,15.1589053 C10.6902316,15.1589053 10.4350737,14.9050105 10.4350737,14.5917474 L10.4350737,14.5917474 Z M12.1264421,13.0140632 L12.8186526,13.0140632 L12.8186526,10.1921684 L12.1264421,10.1921684 L12.1264421,13.0140632 Z M37.9542316,7.43722105 L13.4641263,7.43722105 L12.8199158,7.45111579 L12.8199158,9.18669474 L11.1171789,9.19427368 L11.1171789,13.0140632 L11.0022316,13.0140632 C10.1319158,13.0140632 9.42454737,13.7214316 9.42454737,14.5917474 C9.42454737,15.4620632 10.1319158,16.1694316 11.0022316,16.1694316 L11.1171789,16.1694316 L11.1171789,22.1972211 L11.0022316,22.1972211 C10.1319158,22.1972211 9.42454737,22.9045895 9.42454737,23.7749053 C9.42454737,24.6452211 10.1319158,25.3525895 11.0022316,25.3525895 L11.1171789,25.3525895 L11.1171789,31.3816421 L11.0022316,31.3816421 C10.1319158,31.3816421 9.42454737,32.0890105 9.42454737,32.9593263 C9.42454737,33.8296421 10.1319158,34.5370105 11.0022316,34.5370105 L11.1171789,34.5370105 L11.1171789,38.2999579 L11.1285474,38.8178526 L12.8199158,38.8178526 L12.8199158,39.9180632 L12.8325474,40.5622737 L37.3226526,40.5622737 L37.9668632,40.5496421 L37.9668632,8.08269474 L37.9542316,7.43722105 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M10.392,25.6551579 L22.3957895,25.6551579 L22.3957895,24.6446316 L10.392,24.6446316 L10.392,25.6551579 Z M10.392,22.4846316 L22.3957895,22.4846316 L22.3957895,21.4741053 L10.392,21.4741053 L10.392,22.4846316 Z M15.7616842,16.1408 L17.0248421,16.1408 L17.0248421,12.2439579 L20.9216842,12.2439579 L20.9216842,10.9808 L17.0248421,10.9808 L17.0248421,7.08395789 L15.7616842,7.08395789 L15.7616842,10.9808 L11.8648421,10.9808 L11.8648421,12.2439579 L15.7616842,12.2439579 L15.7616842,16.1408 Z M16.3932632,5.75612632 C19.6231579,5.75612632 22.2492632,8.38349474 22.2492632,11.6121263 C22.2492632,14.8420211 19.6231579,17.4681263 16.3932632,17.4681263 C13.1646316,17.4681263 10.5372632,14.8420211 10.5372632,11.6121263 C10.5372632,8.38349474 13.1646316,5.75612632 16.3932632,5.75612632 M16.3932632,18.7312842 C20.3191579,18.7312842 23.5124211,15.5380211 23.5124211,11.6121263 C23.5124211,7.68623158 20.3191579,4.49296842 16.3932632,4.49296842 C12.4673684,4.49296842 9.27410526,7.68623158 9.27410526,11.6121263 C9.27410526,15.5380211 12.4673684,18.7312842 16.3932632,18.7312842 M27.7037053,32.2991158 L5.08307368,32.2991158 L5.08307368,27.5370105 L5.35086316,27.5370105 C6.22117895,27.5370105 6.92854737,26.8296421 6.92854737,25.9593263 C6.92854737,25.0890105 6.22117895,24.3816421 5.35086316,24.3816421 L5.08307368,24.3816421 L5.08307368,18.3525895 L5.35086316,18.3525895 C6.22117895,18.3525895 6.92854737,17.6452211 6.92854737,16.7749053 C6.92854737,15.9045895 6.22117895,15.1972211 5.35086316,15.1972211 L5.08307368,15.1972211 L5.08307368,9.16943158 L5.35086316,9.16943158 C6.22117895,9.16943158 6.92854737,8.46206316 6.92854737,7.59174737 C6.92854737,6.72143158 6.22117895,6.01406316 5.35086316,6.01406316 L5.08307368,6.01406316 L5.08307368,1.70037895 L27.7037053,1.70037895 L27.7037053,32.2991158 Z M3.12644211,30.8073263 L3.81865263,30.8073263 L3.81865263,27.5370105 L3.12644211,27.5370105 L3.12644211,30.8073263 Z M1.43633684,25.9593263 C1.43633684,25.6460632 1.69023158,25.3921684 2.00223158,25.3921684 L5.35086316,25.3921684 C5.66412632,25.3921684 5.91802105,25.6460632 5.91802105,25.9593263 C5.91802105,26.2725895 5.66412632,26.5264842 5.35086316,26.5264842 L2.00223158,26.5264842 C1.69023158,26.5264842 1.43633684,26.2725895 1.43633684,25.9593263 L1.43633684,25.9593263 Z M3.12644211,24.3803789 L3.81865263,24.3803789 L3.81865263,18.3525895 L3.12644211,18.3525895 L3.12644211,24.3803789 Z M1.43633684,16.7749053 C1.43633684,16.4629053 1.69023158,16.2077474 2.00223158,16.2077474 L5.35086316,16.2077474 C5.66412632,16.2077474 5.91802105,16.4629053 5.91802105,16.7749053 C5.91802105,17.0881684 5.66412632,17.3433263 5.35086316,17.3433263 L2.00223158,17.3433263 C1.69023158,17.3433263 1.43633684,17.0881684 1.43633684,16.7749053 L1.43633684,16.7749053 Z M3.12644211,15.1972211 L3.81865263,15.1972211 L3.81865263,9.16943158 L3.12644211,9.16943158 L3.12644211,15.1972211 Z M1.43633684,7.59174737 C1.43633684,7.27974737 1.69023158,7.02458947 2.00223158,7.02458947 L5.35086316,7.02458947 C5.66412632,7.02458947 5.91802105,7.27974737 5.91802105,7.59174737 C5.91802105,7.90501053 5.66412632,8.15890526 5.35086316,8.15890526 L2.00223158,8.15890526 C1.69023158,8.15890526 1.43633684,7.90501053 1.43633684,7.59174737 L1.43633684,7.59174737 Z M3.12644211,6.01406316 L3.81865263,6.01406316 L3.81865263,3.19216842 L3.12644211,3.19216842 L3.12644211,6.01406316 Z M28.9542316,0.437221053 L4.46412632,0.437221053 L3.81991579,0.451115789 L3.81991579,2.18669474 L2.11717895,2.19427368 L2.11717895,6.01406316 L2.00223158,6.01406316 C1.13191579,6.01406316 0.424547368,6.72143158 0.424547368,7.59174737 C0.424547368,8.46206316 1.13191579,9.16943158 2.00223158,9.16943158 L2.11717895,9.16943158 L2.11717895,15.1972211 L2.00223158,15.1972211 C1.13191579,15.1972211 0.424547368,15.9045895 0.424547368,16.7749053 C0.424547368,17.6452211 1.13191579,18.3525895 2.00223158,18.3525895 L2.11717895,18.3525895 L2.11717895,24.3816421 L2.00223158,24.3816421 C1.13191579,24.3816421 0.424547368,25.0890105 0.424547368,25.9593263 C0.424547368,26.8296421 1.13191579,27.5370105 2.00223158,27.5370105 L2.11717895,27.5370105 L2.11717895,31.2999579 L2.12854737,31.8178526 L3.81991579,31.8178526 L3.81991579,32.9180632 L3.83254737,33.5622737 L28.3226526,33.5622737 L28.9668632,33.5496421 L28.9668632,1.08269474 L28.9542316,0.437221053 Z"
      transform="translate(9 7)"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Contacts;
