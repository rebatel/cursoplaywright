import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker'


test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {
    const taskName = 'Ler um livro de Typescript'

    await request.delete('http://localhost:3333/helper/tasks/' + taskName)

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    await inputTaskName.fill(taskName)

    await page.click('css=button >> text=Create')



})