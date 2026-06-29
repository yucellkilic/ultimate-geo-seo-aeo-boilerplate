#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const issues = [];
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

if (!layoutContent.includes('title:')) issues.push('⚠️  Missing title');
if (!layoutContent.includes('description:')) issues.push('⚠️  Missing description');

const robotsPath = path.join(process.cwd(), 'public/robots.txt');
if (!fs.existsSync(robotsPath)) issues.push('⚠️  Missing robots.txt');

if (issues.length === 0) {
  console.log('✅ SEO validation passed');
} else {
  console.log('❌ SEO issues found');
  issues.forEach(issue => console.log(issue));
  process.exit(1);
}
