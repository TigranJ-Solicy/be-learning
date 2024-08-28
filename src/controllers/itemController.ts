import { Request, Response, NextFunction } from "express";
import { getMongoRepository } from "typeorm";
import { Item } from "../entity/Items";

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

    const organizationRepository = getMongoRepository(Item);
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
