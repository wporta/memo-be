import { RequestHandler } from 'express';
import NoteModel from '../models/noteModel';

export const getNotes: RequestHandler = async (_req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;

  try {
    const note = await NoteModel.findById(noteId).exec();
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const createNote: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;

  try {
    const newNote = await NoteModel.create({
      title,
      text,
    });

    res.status(201).send(newNote);
  } catch (error) {
    next(error);
  }
};
