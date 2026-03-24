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
        verktoydata_hverdagshjelpen_name: 'Everyday Helper',
        verktoydata_hverdagshjelpen_ingress: 'Tips and exercises to manage everyday life with small steps.',
        verktoydata_ungmestring_name: 'Youth Coping',
        verktoydata_ungmestring_ingress: 'Digital self-help program for youth dealing with anxiety and stress.',
        verktoydata_bevegelsesglede_name: 'Joy of Movement',
        verktoydata_bevegelsesglede_ingress: 'Exercise program adapted for children and youth with activity suggestions.',
        verktoydata_tryggfodsel_name: 'Safe Birth',
        verktoydata_tryggfodsel_ingress: 'Preparation tool for pregnant women with information and exercises.',
        verktoydata_skadekompasset_name: 'Injury Compass',
        verktoydata_skadekompasset_ingress: 'Guidance for assessing and self-treating common injuries.',
        verktoydata_seniorbalanse_name: 'Senior Balance',
        verktoydata_seniorbalanse_ingress: 'Balance training and fall prevention for the elderly.',
        verktoydata_tankevenn_name: 'Thought Friend',
        verktoydata_tankevenn_ingress: 'Cognitive therapy tool for managing negative thought patterns.',
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
        filterOption_omrade_legend: 'Choose whatever fits',
        filterOption_passerFor_legend: 'Choose whatever fits',
        filterOption_type_legend: 'Choose whatever fits',
        sort_label: 'Sorting',
        filterbutton_text: 'Find ...',
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
        verktoydata_hverdagshjelpen_name: 'Hverdagshjelpen',
        verktoydata_hverdagshjelpen_ingress: 'Tips og øvelser for å mestre hverdagen med små grep.',
        verktoydata_ungmestring_name: 'UngMestring',
        verktoydata_ungmestring_ingress: 'Digitalt selvhjelpsprogram for ungdom med angst og stress.',
        verktoydata_bevegelsesglede_name: 'Bevegelsesglede',
        verktoydata_bevegelsesglede_ingress: 'Treningsprogram tilpasset barn og unge med aktivitetsforslag.',
        verktoydata_tryggfodsel_name: 'Trygg Fødsel',
        verktoydata_tryggfodsel_ingress: 'Forberedelsesverktøy for gravide med informasjon og øvelser.',
        verktoydata_skadekompasset_name: 'Skadekompasset',
        verktoydata_skadekompasset_ingress: 'Veiledning for vurdering og egenbehandling av vanlige skader.',
        verktoydata_seniorbalanse_name: 'SeniorBalanse',
        verktoydata_seniorbalanse_ingress: 'Balansetrening og fallforebygging for eldre.',
        verktoydata_tankevenn_name: 'Tankevenn',
        verktoydata_tankevenn_ingress: 'Kognitiv terapi-verktøy for å håndtere negative tankemønstre.',
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
        filterOption_omrade_legend: 'Velg det som passer',
        filterOption_passerFor_legend: 'Velg det som passer',
        filterOption_type_legend: 'Velg det som passer',
        sort_label: 'Sortering',
        filterbutton_text: 'Finn ...',
      };
  }
};
