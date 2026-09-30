import { Router } from "express";
import { pool } from "../config.ts";

export const testRouter = Router();

testRouter.get('/test', async (req, res) => {
    try {
        await pool.query('DROP TABLE IF EXISTS hello');

        await pool.query(`
            CREATE TABLE hello (
                id SERIAL PRIMARY KEY,
                name VARCHAR(20)
            )
        `);

        await pool.query(`
            INSERT INTO hello (name)
            VALUES ('ram')
        `);

        const response = await pool.query(`
            SELECT * FROM hello
        `);

        console.log(response.rows[0]);

        return res.status(200).json({
            status: true,
            message: 'implemented .. !',
            data: response.rows[0]
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            status: false,
            message: 'Something went wrong'
        });
    }
});
