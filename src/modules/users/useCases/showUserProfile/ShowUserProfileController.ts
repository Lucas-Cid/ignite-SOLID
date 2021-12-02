import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch {
      return response.status(404).json({ error: "mensagem do erro" });
    }
  }
}

export { ShowUserProfileController };
