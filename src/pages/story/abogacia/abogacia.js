import "../../../app/css/others.css";
import "../../../app/css/others.scss";
import audio from '../../../audio/typing.mp3';

import {
    storyStrut
} from "../../../app/struts/story_strut/story_strut.js";
let par = [
    ['Un Preciado Encargo', 'En Ciudad Plutón, hay una reconocida joyería que entrega las mejores joyas a sus clientes. Una pareja se casó, y el anillo de bodas de la novia tenía un diamante con una extraña marca en su relieve, la pareja se empeña en denunciar a la joyería, no solo porque el anillo no es exactamente el que pidieron, sino que tiene símbolos extraños que parecen pertenecer a alguna organización o secta.', 'Bodas Truncas', './bodas_truncas.bundle.html'],
    ['Dinero y Jabón', 'Lalo, un amigo de El hombre tiene un negocio en el que vende oro a la joyería. Pero este oro es extraído de los numerosos túneles debajo de Ciudad Plutón. Lalo hizo un agujero en el cuarto de visitas de su casa, y se ha dedicado a crear y crear túneles a fin de conseguir más oro, últimamente han habido varios derrumbes en las calles de Ciudad Plutón, pero las autoridades aún no conocen la existencia de los túneles. Lalo, creó una empresa fantasma de "compraventa" de minerales y químicos, por la que su facturación de mayor peso es el oro, para este cometido, necesita la ayuda de El hombre para pasar desapercibidas las inexplicables ganancias.', 'Cayendo por su propio peso', './cpspp.bundle.html']
];
storyStrut('Abogacia', undefined, audio, par, undefined, './story.bundle.html', 33);