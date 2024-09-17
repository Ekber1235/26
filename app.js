let colors = ["qırmızı", "mavi", "yaşıl", "sarı"];


colors.pop(); 
colors.push("bənövşəyi"); 


colors.shift(); 
colors.unshift("ağ"); 


for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
