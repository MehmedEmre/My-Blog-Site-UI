import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlFormat'
})
export class UrlFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {

    value.toLowerCase();

    value = value.replace(/[",.*+?^${}()|[\]\\]/g,"-");// " . * ? gibi karakterleri - ile yer değiştir.
    value = value.replace(/\s/g,"-"); // boşluk karakterlerini - ile yer değiştirir
    // value = value.replace(" ","-"); bu sadece ilk karşılaştığı karakteri -'ye çevirir.
    value = value.replace(/[ç]/g,"c"); // ç karakterini c ile yer değiştir
    value = value.replace(/[ğ]/g,"g");
    value = value.replace(/[ı]/g,"i");
    value = value.replace(/[ö]/g,"o");
    value = value.replace(/[ş]/g,"s");
    value = value.replace(/[ü]/g,"u");

    return value;
  }

}
