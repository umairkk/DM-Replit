import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import {
  contactSubmissionsTable,
  db,
  insertContactSubmissionSchema,
} from "@workspace/db";

const router: IRouter = Router();

router.post("/contact", async (req, res, next) => {
  try {
    const parsed = SubmitContactBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        error:
          parsed.error.issues[0]?.message ?? "Invalid contact submission",
      });
      return;
    }

    const insertValues = insertContactSubmissionSchema.parse(parsed.data);

    const [row] = await db
      .insert(contactSubmissionsTable)
      .values(insertValues)
      .returning({
        id: contactSubmissionsTable.id,
        createdAt: contactSubmissionsTable.createdAt,
      });

    if (!row) {
      throw new Error("Failed to persist contact submission");
    }

    req.log.info(
      { submissionId: row.id, email: insertValues.email },
      "New contact submission received",
    );

    res.status(201).json({
      id: row.id,
      createdAt: row.createdAt.toISOString(),
    });
  } catch (err) {
    next(err);
  }
});

export default router;
