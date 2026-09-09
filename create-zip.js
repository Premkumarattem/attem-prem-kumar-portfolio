import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const projectDir = 'C:\\Users\\premk\\.gemini\\antigravity\\scratch\\attem-prem-kumar-portfolio';
const zipPath = 'C:\\Users\\premk\\.gemini\\antigravity\\scratch\\attem-prem-kumar-portfolio.zip';

console.log('Packaging portfolio project into ZIP archive...');

// Remove existing zip if present
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// Compress project folder using PowerShell, excluding node_modules and .git for clean delivery
const psCommand = `powershell -Command "Compress-Archive -Path '${projectDir}\\*' -DestinationPath '${zipPath}' -Exclude '${projectDir}\\node_modules\\*', '${projectDir}\\dist\\*' -Force"`;

try {
  execSync(psCommand, { stdio: 'inherit' });
  console.log(`\nSUCCESS: Zip archive successfully created at:\n${zipPath}`);
} catch (err) {
  console.error('Error creating zip archive:', err);
}
