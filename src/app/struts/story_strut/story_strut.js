import { newStoryList } from "../list_strut/story_list.js";
export const storyStrut = (name, imgRef, audioRef, par, listArr, back, progress) => {
    var title = document.createElement('h1');
    var pic = document.createElement('img');
    var audio = document.createElement('audio');
    var audioSrc = document.createElement('source');
    var artic = document.createElement('article');
    var ret = document.createElement('a');
    var sp = document.createElement('span');
    var prog = document.createElement('progress');

    title.innerHTML = name;
    document.body.appendChild(title);

    if(imgRef != undefined){
        pic.src = imgRef;
        document.body.appendChild(pic);
    }

    if(audioRef != undefined){
        audio.controls = true;
        audioSrc.src = audioRef;
        audio.appendChild(audioSrc);
        document.body.appendChild(audio);
    }

    for(let element of par){
        var detail = document.createElement('details');
        detail.open = true;
        var summ = document.createElement('summary');
        summ.innerHTML = element[0];
        detail.appendChild(summ);
        var p = document.createElement('p');
        p.innerHTML = element[1];
        detail.appendChild(p);
        if (element[3] != undefined || element[2] != undefined){
            var a = document.createElement('a');
            a.innerHTML = element[2];
            a.href = new URL(element[3], window.location.href).href;
            detail.appendChild(a);
        }
        artic.appendChild(detail);
    }
    document.body.appendChild(artic);

    if(listArr != undefined){
        newStoryList(listArr, undefined);
    }

    if(progress != undefined){
        sp.innerHTML = 'Progreso de lectura: ';
        document.body.appendChild(sp);
        prog.innerHTML = progress + '%';
        prog.value = progress;
        prog.max = 100;
        document.body.appendChild(prog);
    }

    ret.innerHTML = 'Regresar';
    ret.href = new URl(back, window.location.href).href;
    document.body.appendChild(ret);

}



