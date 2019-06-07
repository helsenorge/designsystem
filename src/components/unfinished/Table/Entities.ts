/*
 *
 * Entitites copied over from minhelseentities.ts
 * Enums copied over from minhelseenums.ts
 *
 */

// ------ Enums ------
export enum XDSDokumentKategori {
  EpikriserOgSammenfatninger = 1,
  Notater = 2,
  Korrespodanse = 3,
  Ukjent = 99,
}

// ------ Entities ------
export class TextMessage {
  constructor() {}
  Title: string;
  Body: string;
}

export type ISO8601 = string;

export class DocumentListItem {
  constructor() {}
  Id: string;
  Title: string;
  Created: ISO8601;
  Author: string;
  OrganisationName: string;
  DepartmentName: string;
  AuthorRole: string;
  MimeType: string;
  DocumentType: string;
  VolvenId: string;
  VolvenSubId: string;
  VolvenName: string;
  FileSize: number;
  ValidFileSize: boolean;
  IsSupported: boolean;
  IsRestricted: boolean;
  ConfidentialityCode: string;
}

export class RestDocumentListItem {
  constructor() {}
  Id: string;
  Title: string;
  Link: string;
  Icon: string;
  CreatedDate: string;
  CreatedTime: string;
  CreatedYear: string;
  SortableCreatedDate: string;
  ModifiedDate: string;
  ModifiedYear: string;
  SortableModifiedDate: string;
  FileSize: number;
  ValidFileSize: boolean;
  Author: string;
  Supported: boolean;
  Status: string;
  HashValue: string;
  Item: DocumentListItem;
}

export class XDSDokument {
  constructor() {}
  Id: string;
  HomeId: string;
  RepoId: string;
  Tittel: string;
  OpprettetDato: string;
  SorterbarOpprettetDato: string;
  Forfatter: Array<String>;
  Organisasjon: string;
  Avdeling: string;
  MimeType: string;
  DokumentType: string;
  KategoriId: XDSDokumentKategori;
  Kategori: string;
  FilStorrelse: number;
  GyldigFilStorrelse: boolean;
  ErStottet: boolean;
  ErBegrenset: boolean;
  KonfidensialitetsKode: string;
}
