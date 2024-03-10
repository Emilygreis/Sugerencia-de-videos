// 1.- Implementar patrón módulo
const moduloApp = (() => {
  function setearVideoPrivada(url, id) {
    const reproductor = document.getElementById(id);
    reproductor.setAttribute("src", url);
  }

  return {
    setearVideoPublica: (url, id) => {
      setearVideoPrivada(url, id);
    }
  }
})();

// 2.- Establecer clase Padre
class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url; 
  }

  set url(nueva_url) {
    this._url = nueva_url;
  }

  setInicio() {
    return " Este método es para realizar un cambio en la URL del video";
  }
}

// 3.- Crear clase hija
class Reproductor extends Multimedia {
  constructor(id, url) {
    super(url);
    this._id = id;
  }

  playMultimedia() {
    moduloApp.setearVideoPublica(this._url, this._id);
  }

  setInicio(tiempo) {
    moduloApp.setearVideoPublica(`${this._url}?start=${tiempo}`, this._id);
  }
}

// 4.- Instanciar Reproductores
const musica = new Reproductor("musica", "https://www.youtube.com/embed/UfwFFOAnPFk");
const peliculas = new Reproductor("peliculas", "https://www.youtube.com/embed/2OEGx_yIS6M");
const series = new Reproductor("series", "https://www.youtube.com/embed/HQ8H5gqGA34")

// 5.- Invotar método playMultimedia
musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

// 6.- Utilizar setInicio
series.setInicio(60);