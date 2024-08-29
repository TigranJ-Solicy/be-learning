import { Request, Response, NextFunction } from "express";
import { Organization } from "../entity/Organization";
import { AppDataSource } from "../data-source";

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

    const organizationRepository = AppDataSource.getRepository(Organization);
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
