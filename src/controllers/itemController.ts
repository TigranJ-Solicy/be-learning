import { Request, Response, NextFunction } from "express";
import { Item } from "../entity/Items";
import { AppDataSource } from "../data-source";

export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { creatorEmail, organizationName, name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        error: "Name, Description are required",
      });
    }

    const organizationRepository = AppDataSource.getRepository(Item);
    const organization = organizationRepository.create({
      creatorEmail,
      organizationName,
      name,
      description,
    });

    const result = await organizationRepository.save(organization);

    res.status(201).json({ item: result });
  } catch (error) {
    next(error);
  }
};
