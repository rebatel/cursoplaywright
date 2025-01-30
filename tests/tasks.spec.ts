import { test, expect } from "@playwright/test";

test('deve poder cadastrar uma nova tarefa', async ({ page }) => {

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    await inputTaskName.fill('Ler um livro de Typescript')



})