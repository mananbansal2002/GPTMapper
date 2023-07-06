const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const app = express();
const html2canvas = require('html2canvas');
const insertLine = require('insert-line');

const cors = require('cors');
const { base64 } = require('base64-img');




const data ={
  "name": "Decentralized Shopping Website with 3D 360 View of Products",
  "children": [
    {
      "name": "Blockchain Integration",
      "children": [
        {
          "name": "Smart Contract Development",
          "children": [
            {
              "name": "ERC-20 Token Standard",
              "children": []
            },
            {
              "name": "ERC-721 Token Standard (for NFTs)",
              "children": []
            }
          ]
        },
        {
          "name": "Payment Integration",
          "children": [
            {
              "name": "Cryptocurrencies (BTC, ETH, etc.)",
              "children": []
            },
            {
              "name": "Stablecoins (USDT, USDC, etc.)",
              "children": []
            }
          ]
        },
        {
          "name": "Decentralized Data Storage",
          "children": [
            {
              "name": "IPFS",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Web Development",
      "children": [
        {
          "name": "Frontend Development",
          "children": [
            {
              "name": "React",
              "children": []
            },
            {
              "name": "Three.js",
              "children": []
            },
            {
              "name": "WebGL",
              "children": []
            }
          ]
        },
        {
          "name": "Backend Development",
          "children": [
            {
              "name": "Node.js",
              "children": []
            },
            {
              "name": "Express",
              "children": []
            },
            {
              "name": "MongoDB",
              "children": []
            }
          ]
        },
        {
          "name": "API Development",
          "children": [
            {
              "name": "RESTful API",
              "children": []
            },
            {
              "name": "GraphQL",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "3D Modeling and Animation",
      "children": [
        {
          "name": "3D Modeling Software",
          "children": [
            {
              "name": "Blender",
              "children": []
            },
            {
              "name": "Autodesk Maya",
              "children": []
            }
          ]
        },
        {
          "name": "Animation Software",
          "children": [
            {
              "name": "Unity",
              "children": []
            },
            {
              "name": "Unreal Engine",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Product Visualization",
      "children": [
        {
          "name": "3D Scanning",
          "children": [
            {
              "name": "Photogrammetry",
              "children": []
            },
            {
              "name": "Lidar",
              "children": []
            }
          ]
        },
        {
          "name": "3D Product Rendering",
          "children": [
            {
              "name": "Product Design Software",
              "children": [
                {
                  "name": "CAD (Computer-Aided Design)",
                  "children": []
                },
                {
                  "name": "SketchUp",
                  "children": []
                }
              ]
            },
            {
              "name": "3D Rendering Software",
              "children": [
                {
                  "name": "V-Ray",
                 
              "children": []
            },
            {
              "name": "Blender",
              "children": []
            },
            {
              "name": "KeyShot",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "360 View of Products",
      "children": [
        {
          "name": "360 Product Photography",
          "children": []
        },
        {
          "name": "360 Product Viewer",
          "children": [
            {
              "name": "Three.js",
              "children": []
            },
            {
              "name": "A-Frame",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
]}
const datastring = JSON.stringify(data);

console.log(datastring);










app.use(cors());
app.get('/getRoadmap', async (req, res) => {
  const topic = req.query.topic || 'World';
  
  try {
    const fileCode = await fs.readFile('./Roadmap.html', 'utf-8');
    // Use the fileCode variable here
    // console.log(fileCode);
    
    const modifiedData = fileCode.split('\n');
    
    modifiedData.splice(32, 0,"data = "+ datastring); 
        const html = modifiedData.join('\n');
    console.log(html);
    if(html==fileCode) console.log("didnt work");
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setContent(html);

    // Use html2canvas to render the chart element as an image
    const chartElement = await page.$('#chart');
    const base64Data = await chartElement.screenshot();
    // var blob = new Blob([base64Data], {type : 'image/svg+xml'});
    await browser.close();
    fs.writeFile('newfile.txt', base64Data, function(err) {
  if (err) throw err;
  console.log('Data written to file!');
});
res.header('Access-Control-Allow-Origin', '*');
    res.send({photo:base64Data});
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
