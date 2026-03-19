import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login válido', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessar();
  await loginPage.fazerLogin(process.env.USER, process.env.PASSWORD);

  // exemplo de validação
  await expect(page).toHaveURL(/minha-conta/);
});