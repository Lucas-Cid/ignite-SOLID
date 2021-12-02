import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      return response
        .status(201)
        .json(this.turnUserAdminUseCase.execute({ user_id }));
    } catch {
      return response.status(404).json({ error: "mensagem do erro" });
    }
  }
}

export { TurnUserAdminController };
