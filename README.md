This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Installing code:

```bash
npm install --legacy-peer-deps
```

## Deploying 

Connect to VPS with SSH: 
```bash
0. ssh root@217.196.48.28 
```

```bash
1. cd /var/www/nextjs
2. pm2 delete "art gallery"
3. rm -rf art-gallery..... (folder)
4. git clone https://github.com/bulgarianSamurai123/art-gallery-angelina-new.git
5. npm install --legacy-peer-deps
6. npm run build 
7. pm2 start npm --name "art gallery" -- start
8. pm2 startup
9. pm2 save
```
