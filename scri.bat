#!/bin/bash
# Script para corregir rutas en archivos HTML

# Reemplazar en index.html
sed -i 's|href="./|href="|g' index.html
sed -i 's|src="./|src="|g' index.html

# Reemplazar en otros archivos HTML
sed -i 's|href="./|href="|g' blog.html
sed -i 's|href="./|href="|g' nosotros2.html

# Reemplazar en artículos
sed -i 's|href="./|href="|g' articulos/*.html
sed -i 's|src="./|src="|g' articulos/*.html

echo "✅ Rutas corregidas exitosamente"