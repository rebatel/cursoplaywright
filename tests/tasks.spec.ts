import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker'


test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {
    //Dado que eu tenho uma nova tarefa
    const taskName = 'Ler um livro de Typescript'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)
    //E que estou na pagina de cadastro
    await page.goto('http://localhost:8080')
    //Quando faço o cadastro da tarefa
    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    await inputTaskName.fill(taskName)
    await page.click('css=button >> text=Create')
    //Então a tarefa deve ser exibida na lista de tarefas
    const target = page.locator('css=.task-item p >> text=' + taskName)
    await expect(target).toBeVisible() 
    



})