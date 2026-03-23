import { LanguageLocales } from '@helsenorge/designsystem-react/constants';

export const getResources = (language: LanguageLocales) => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return {
        verktoydata_aa_name: 'Severe aortic stenosis - shared decision-making tool',
        verktoydata_aa_ingress:
          'This tool helps you participate in the decision about which examination and treatment methods are best suited for you.',
        verktoydata_grubl_name: 'Grubl',
        verktoydata_grubl_ingress:
          "Do you want to spend less time ruminating and worrying, but don't know how? Then Grubl might be the app for you.",
        verktoydata_mm_name: 'Mamma Mia',
        verktoydata_mm_ingress:
          'Mamma Mia is an app that promotes health and well-being for mother, child, and partner during pregnancy and after birth. 12 years of research and testing on over 4000 women show that the app increases well-being and coping, and reduces the risk of postpartum depression.',
        filterOptionTitles_omrade: 'Health area',
        filterOptionTitles_passerfor: 'Best suited for',
        filterOptionTitles_type: 'Tool type',
        omradeOptions_psykiskhelse: 'Mental health',
        omradeOptions_graviditet: 'Pregnancy and birth',
        omradeOptions_livsstil: 'Lifestyle and exercise',
        omradeOptions_sykdom: 'Illness and injuries',
        omradeOptions_rad: 'Advice and everyday tips',
        omradeOptions_tanker: 'Thoughts and emotions',
        passerForOptions_barn: 'Children',
        passerForOptions_ungdom: 'Youth',
        passerForOptions_voksne: 'Adults',
        passerForOptions_eldre: 'Elderly',
        typeOptions_app: 'App',
        typeOptions_web: 'Web solution',
      };
    case LanguageLocales.NORWEGIAN:
    default:
      return {
        verktoydata_aa_name: 'Alvorlig aortastenose - samvalgsverktøy',
        verktoydata_aa_ingress:
          'Dette verktøyet hjelper deg å delta i beslutningen om hvilke undersøkelses- og behandlingsmetoder som passer best for deg.',
        verktoydata_grubl_name: 'Grubl',
        verktoydata_grubl_ingress:
          'Vil du bruke mindre tid på grubling og bekymring, men vet ikke hvordan? Da kan Grubl være appen for deg.',
        verktoydata_mm_name: 'Mamma Mia',
        verktoydata_mm_ingress:
          'Mamma Mia er en app som fremmer helse og trivsel for mor, barn og partner under graviditeten og etter fødselen. 12 års forskning og testing på over 4000 kvinner viser at appen øker trivsel og mestring og reduserer risikoen for fødselsdepresjon.',
        filterOptionTitles_omrade: 'Helseområde',
        filterOptionTitles_passerfor: 'Passer for',
        filterOptionTitles_type: 'Verktøytype',
        omradeOptions_psykiskhelse: 'Psykisk helse',
        omradeOptions_graviditet: 'Graviditet og fødsel',
        omradeOptions_livsstil: 'Livsstil og trening',
        omradeOptions_sykdom: 'Sykdom og skader',
        omradeOptions_rad: 'Råd og tips i hverdagen',
        omradeOptions_tanker: 'Tanker og følelser',
        passerForOptions_barn: 'Barn',
        passerForOptions_ungdom: 'Ungdom',
        passerForOptions_voksne: 'Voksne',
        passerForOptions_eldre: 'Eldre',
        typeOptions_app: 'App',
        typeOptions_web: 'Webløsning',
      };
  }
};
