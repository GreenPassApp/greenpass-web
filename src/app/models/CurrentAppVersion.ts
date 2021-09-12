class DownloadInformation {
  url: string
  sha256: string


  constructor(url: string, sha256: string) {
    this.url = url;
    this.sha256 = sha256;
  }
}

class AndroidVersion {
  version: string
  updated_at: Date
  download: DownloadInformation


  constructor(version: string, updated_at: Date, download: DownloadInformation) {
    this.version = version;
    this.updated_at = updated_at;
    this.download = download;
  }
}

class Changelog {
  de: string
  en: string

  constructor(de: string, en: string) {
    this.de = de;
    this.en = en;
  }
}

export class CurrentAppVersion{
  android: AndroidVersion
  changelog: Changelog


  constructor(android: AndroidVersion, changelog: Changelog) {
    this.android = android;
    this.changelog = changelog;
  }
}
