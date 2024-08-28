import { Request, Response, NextFunction } from "express";
import { getMongoRepository } from "typeorm";
import { Organization } from "../entity/Organization";

export const createOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { organizationName, organizationFounder, creatorEmail } = req.body;

    if (!organizationName || !organizationFounder) {
      return res.status(400).json({
        error: "Organization name, Organization Founder Name are required",
      });
    }

    const organizationRepository = getMongoRepository(Organization);
    const organization = organizationRepository.create({
      organizationName,
      organizationFounder,
      creatorEmail,
    });

    const result = await organizationRepository.save(organization);

    res.status(201).json({ organization: result });
  } catch (error) {
    next(error);
  }
};
