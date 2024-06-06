const tareaRepository = require('../repository/tareaRepository');

exports.getTareas = ()=>{
    return tareaRepository.getTareasRepo();
}

exports.getTareaById = (id)=>{
    return tareaRepository.getTareaByIdRepo(id);
}