import express, { Request, Response } from "express";
import { User } from "../models/User.model";

export const getUser = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const newUser = await User.create({
    firstName,
    lastName,
  });
  res.json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const data = req.body;
  const updatedUser = await User.update(
    { ...data },
    {
      where: {
        id: userId,
      },
    }
  );
  res.json(updatedUser);
};
