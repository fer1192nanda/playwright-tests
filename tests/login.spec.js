import { test, expect } from '@playwright/test';

test('Login no portal', async ({ page }) => {

  await page.goto(process.env.BASE_URL + '/login/auth');

  await page.getByRole('textbox', { name: 'Usuário' })
    .fill(process.env.USER);

  await page.getByRole('textbox', { name: 'Senha' })
    .fill(process.env.PASSWORD);

  await page.getByRole('button', { name: 'Entrar' }).click();

  await expect(page).not.toHaveURL(/login/);

});