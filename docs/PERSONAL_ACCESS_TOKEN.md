# Personal Access Token Guide

## 🔑 How to Generate Personal Access Token

### Step 1: Go to GitHub Settings
1. Open https://github.com/settings/tokens
2. You can also go to: Settings → Developer settings → Personal access tokens

### Step 2: Create New Token
1. Click **"Generate new token (classic)"**
2. Name it: `ultimate-boilerplate-token`

### Step 3: Select Scopes
Check these scopes:
- ✅ `repo` (Full control of private repositories)
- ✅ `workflow` (Update GitHub Action workflows)
- ✅ `read:user` (Read user profile data)
- ✅ `gist` (Create gists)

### Step 4: Generate & Copy
1. Click **"Generate token"**
2. **COPY THE TOKEN** (you won't see it again!)
3. Keep it safe! 🔐

## 📝 Using the Token

### Option 1: Environment Variable
```bash
export GITHUB_TOKEN='ghp_xxxxxxxxxxxxxxxxxxxxx'
```

### Option 2: Store Credentials
```bash
git config --global credential.helper store
# Then use token as password when prompted
```

### Option 3: Use with Git
```bash
git clone https://<USERNAME>:<TOKEN>@github.com/yucellkilic/ultimate-geo-seo-aeo-boilerplate.git
```

## 🚀 Push Files with Token

```bash
# Clone
git clone https://yucellkilic:$GITHUB_TOKEN@github.com/yucellkilic/ultimate-geo-seo-aeo-boilerplate.git
cd ultimate-geo-seo-aeo-boilerplate

# Configure
git config user.email "your-email@github.com"
git config user.name "yucellkilic"

# Add all files
git add .

# Commit
git commit -m "🚀 Complete boilerplate with all modules"

# Push
git push origin main
```

## ⚠️ Security Tips

1. **Never commit tokens** to Git
2. **Regenerate** if exposed
3. **Set expiration** on tokens
4. **Use environment variables** instead of hardcoding
5. **Rotate tokens** periodically

## 🆘 If Token Expires

1. Generate a new token
2. Update environment variable
3. Reconfigure git credentials
4. Retry push/pull operations

---

**✅ Ready to push? Run the setup guide above!**
