const basePath = 'assets';

const imgData = [
	{
		id: 'Informacoes',
		title: 'Informações',
		folders: [
			{
				id: 'DESCONTAMINAÇÃO',
				title: 'Descontaminação',
				images: [
					{title: 'Filtros de Bomba para Leite', name: 'Filtros Bomba Leite.JPG'},
					{title: 'Tooltip Test', name: 'Kit Fisiatria.JPG'},
					{title: 'Tooltip Test', name: 'Sonda Temperatura.JPG'}
				]
			}
		]
	},
	{
		id: 'MaterialAmbulatorio',
		title: 'Ambulatório',
		images: [
			{title: 'Ambulatório Tip', name: 'MICRO MOTOR.JPG'}
		],
		folders: [
			{
				id: 'ANESTESIA',
				title: 'Anestesia',
				images: [
					{title: 'Tooltip Test', name: 'Mascaras Faciais.JPG'},
					{title: 'Tooltip Test', name: 'Sonda Temperatura Amb..JPG'},
					{title: 'Tooltip Test', name: 'Tabuleiro Cateter Central Amb. (2 un).JPG'},
					{title: 'Tooltip Test', name: 'Tabuleiro Raqui.JPG'}
				]
			},
			{
				id: 'CIRURGIA GERAL',
				title: 'Cirurgia Geral',
				folders: [
					{
						id: 'CAIXA CIR. VASCULAR',
						title: 'Caixa Cir. Vascular',
						images: [
							{title: 'Tooltip Test', name: 'Cx Cirg. Vascular Amb..jpg'}
						]
					},
					{
						id: 'CAIXA LAPAROTOMIA',
						title: 'Caixa Laparotomia',
						images: [
							{title: 'Tooltip Test', name: 'Cx Laparotomia Amb..JPG'},
							{title: 'Tooltip Test', name: 'Cx nova Amb..JPG'},
							{title: 'Tooltip Test', name: 'Laparotomia Amb. 60 pçs.jpg'}
						]
					},
					{
						id: 'FININHO 7 CX',
						title: 'Fininho',
						images: [
							{title: 'Tooltip Test', name: 'CX. FININHO  37 Pç.JPG'}
						]
					},
					{
						id: 'LAPAROSCOPIA',
						title: 'Laparoscopia',
						images: [
							{title: 'Tooltip Test', name: 'TAB. LAPAROSCOPIA AMB..JPG'}
						]
					},
					{
						id: 'PARTES MOLES 8 CX',
						title: 'Partes Moles',
						images: [
							{title: 'Tooltip Test', name: 'Cx Partes Moles.JPG'}
						]
					},
					{
						id: 'PEQ. CIRURGIA 6 CX',
						title: 'Peq. Cirurgia',
						images: [
							{title: 'Tooltip Test', name: 'Cx Peq. Cirg..JPG'}
						]
					}
				]
			},
			{
				id: 'CIRURGIA PLASTICA',
				title: 'Cirurgia Plástica',
				images: [
					{title: 'Tooltip Test', name: 'BASE METALICA 3 UNIDADES.JPG'},
					{title: 'Tooltip Test', name: 'DERMÁTOMO ANTIGO + LAMINAS.JPG'},
					{title: 'Tooltip Test', name: 'DERMÁTOMO ELÉCTRICO.JPG'},
					{title: 'Tooltip Test', name: 'EXPANSOR DE PELE.JPG'},
					{title: 'Tooltip Test', name: 'Kit Plastica Amb. (10pç).JPG'},
					{title: 'Tooltip Test', name: 'QUADRADO ALUMINIO.JPG'}
				]
			},
			{
				id: 'OFTALMOLOGIA',
				title: 'Oftalmologia',
				images: [
					{title: 'Tooltip Test', name: 'OFT.JPG'},
					{title: 'Tooltip Test', name: 'Peças Dr Gabriel.JPG'}
				],
				folders: [
					{
						id: 'CATARATA',
						title: 'Catarata',
						images: [
							{title: 'Tooltip Test', name: 'Catarata.JPG'},
							{title: 'Tooltip Test', name: 'Disposiçao na cx.JPG'}
						]
					},
					{
						id: 'CATARATA COMPLICADA',
						title: 'Catarata Complicada',
						images: [
							{title: 'Tooltip Test', name: 'Catarata complicada.JPG'}
						]
					},
					{
						id: 'Chalasio e pequena cir',
						title: 'Chalasio e Pequena Cir.',
						images: [
							{title: 'Tooltip Test', name: 'CNLS8140.JPG'},
							{title: 'Tooltip Test', name: 'Cx. Peq. Cirugia Oft..JPG'},
							{title: 'Tooltip Test', name: 'GWMO9213.JPG'},
							{title: 'Tooltip Test', name: 'OYVQ9357.JPG'},
							{title: 'Tooltip Test', name: 'VNPC2918.JPG'}
						]
					},
					{
						id: 'ENUCLEAÇÃO',
						title: 'Enucleação',
						images: [
							{title: 'Tooltip Test', name: 'Cx. Enucleaçao.JPG'}
						]
					},
					{
						id: 'GLAUCOMA',
						title: 'Glaucoma',
						images: [
							{title: 'Tooltip Test', name: 'glaucoma 3.JPG'},
							{title: 'Tooltip Test', name: 'Glaucoma verde.JPG'},
							{title: 'Tooltip Test', name: 'Glaucoma.JPG'}
						]
					},
					{
						id: 'PETERIGIO',
						title: 'Peterigio',
						images: [
							{title: 'Tooltip Test', name: 'Disposição do material na caixa.JPG'}
						],
						folders: [
							{
								id: 'Cx 1 a 4 peterígio',
								title: 'Caixa 1 a 4',
								images: [
									{title: 'Tooltip Test', name: '1 Cx Peterígeo Roxa.JPG'},
									{title: 'Tooltip Test', name: '2 Cx Peterígeo Laranja'},
									{title: 'Tooltip Test', name: '3 Cx Peterígeo verde preto'},
									{title: 'Tooltip Test', name: '4 Cx Peterígeo Rosa.JPG'}
								]
							}
						]
					},
					{
						id: 'VITRECTOMIA',
						title: 'Vitrectomia',
						images: [
							{title: 'Tooltip Test', name: 'Cabo vitrectomia com chave e agulhas.JPG'},
							{title: 'Tooltip Test', name: 'Cx Vitrectomia.JPG'}
						]
					}
				]
			},
			{
				id: 'ORL',
				title: 'ORL',
				images: [
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
				]
			},
			{
				id: 'ORTOPEDIA',
				title: 'Ortopedia',
				images: [
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'},
					{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
				]
			}
		]
	},
	{
		id: 'MaterialBlocoCentral',
		title: 'Bloco Central',
		folders: [
			{
				id: 'ANESTESIA',
				title: 'Anestesia',
				images: [
					{title: 'Cabo de Temperatura', name: 'Cabo Temperatura.jpg'},
					{title: 'Sonda de Temperatura', name: 'Sonda Temperatura.JPG'}
				]
			},
			{
				id: 'CIRURGIA GERAL',
				title: 'Cirurgia Geral',
				images: [
					{title: 'Kit de Amputação', name: 'Kit Amputação.jpg'}
				],
				folders: [
					{
						id: 'AFASTADOR BOOK WALTER',
						title: 'Book Walter',
						images: [
							{title: 'Cabo de Temperatura', name: 'Afastador Peças.jpg'},
							{title: 'Sonda de Temperatura', name: 'CX AFASTADOR BOOK WALTER.JPG'}
						]
					},
					{
						id: 'CIRURGIA ABDOMINAL 6cx',
						title: 'Cirurgia Abdominal',
						images: [
							{title: 'Sonda de Temperatura', name: 'Cx Abdominal 66 pç.JPG'}
						]
					},
					{
						id: 'CIRURGIA VASCULAR 1cx',
						title: 'Cirurgia Vascular',
						images: [
							{title: 'Sonda de Temperatura', name: 'Cx Vascular.JPG'}
						]
					},
					{
						id: 'COLEDOSCOPIO',
						title: 'Coledoscópio',
						images: [
							{title: 'Sonda de Temperatura', name: 'TOLF5233.JPG'}
						]
					},
					{
						id: 'CX.MAMA 3cx',
						title: 'Caixa para Mama',
						images: [
							{title: 'Sonda de Temperatura', name: 'Cx Mama.JPG'}
						]
					},
					{
						id: 'FIMOSE 2cx',
						title: 'Fimose',
						images: [
							{title: 'Caixa para Fimose', name: 'Cx Fimose.JPG'}
						]
					},
					{
						id: 'FININHO 3cx',
						title: 'Fininho',
						images: [
							{title: 'Sonda de Temperatura', name: 'Cx Fininho 39 pç.JPG'}
						]
					},
					{
						id: 'MAT. SOLTO CIR',
						title: 'Material Solto',
						images: [
							{title: 'ALLIS', name: 'ALLIS.jpg'},
							{title: 'SATINSKY', name: 'SATINSKY.JPG'}
						]
					},
					{
						id: 'PARTES MOLES CIR 12cx',
						title: 'Partes Moles',
						images: [
							{title: 'Sonda de Temperatura', name: 'Cx Partes Moles Cir 30p.JPG'}
						]
					},
					{
						id: 'TAB. VESICULA LAPAROSCOPICA  5cx',
						title: 'Vesicula Laparoscopica',
						images: [
							{title: 'Cabo de Temperatura', name: 'Material vesicula lap. 8 pç.jpg'},
							{title: 'Sonda de Temperatura', name: 'Tabuleiro vesicula lap 8 pç.JPG'}
						]
					},
					{
						id: 'TABULEIRO LONGO',
						title: 'Tabuleiro Longo',
						images: [
							{title: 'Tabuleiro de 11 Peças', name: 'Tabuleiro Mat. Longo 11pç.JPG'}
						]
					},
					{
						id: 'TIROIDE 4cx',
						title: 'Tiroide 4 Caixas',
						images: [
							{title: 'Caixa Tiroide N 1,2,3 de 37 Peças', name: 'Cx Tiroide  nº 1,2,3 (37 pç).jpg'},
							{title: 'Sonda de Temperatura', name: 'Cx Tiroide nº4 (36 pç).JPG'}
						]
					},
					{
						id: 'TORAX 1CX',
						title: 'Torax 1CX',
						images: [
							{title: 'Caixa de 13 Peças', name: 'Cx Torax 13 pc.JPG'}
						]
					}
				]
			},
			{
				id: 'CIRURGIA PLASTICA',
				title: 'Cirurgia Plástica',
				images: [
					{title: 'Cabo de Temperatura', name: 'BASE METALICA 3 UNIDADES.jpg'},
					{title: 'Cabo de Temperatura', name: 'DERMÁTOMO ANTIGO + LAMINAS.jpg'},
					{title: 'Cabo de Temperatura', name: 'DERMATOMO ELECTRICO.jpg'},
					{title: 'Cabo de Temperatura', name: 'EXPANSOR DE PELE.jpg'},
					{title: 'Sonda de Temperatura', name: 'PLACA ALUMINIO (Solta).JPG'}
				]
			},
			{
				id: 'FOTOS ANTIGAS',
				title: 'Fotos Antigas',
				folders: [
					{
						id: 'Ambulatorio',
						title: 'Ambulatório',
						images: [
							{title: 'Cabo de Temperatura', name: 'PB100008.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB100009.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB100010.jpg'},
							{title: 'Sonda de Temperatura', name: 'PB100011.JPG'}
						]
					},
					{
						id: 'ORL',
						title: 'ORL',
						images: [
							{title: 'Cabo de Temperatura', name: 'ANTIGA.jpg'},
							{title: 'Cabo de Temperatura', name: 'Endonasal Antiga.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB060002.jpg'},
							{title: 'Sonda de Temperatura', name: 'PB170016.JPG'}
						]
					},
					{
						id: 'Ortopedia',
						title: 'Ortopedia',
						images: [
							{title: 'Cabo de Temperatura', name: 'PB060003.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB060004.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB060005.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB110012.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB110013.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB110014.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB110015.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180020.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180021.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180022.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180023.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180024.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180025.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180026.jpg'},
							{title: 'Cabo de Temperatura', name: 'PB180028.jpg'},
							{title: 'Sonda de Temperatura', name: 'PB180029.JPG'}
						]
					}
				]
			},
			{
				id: 'GINECOLOGIA',
				title: 'Ginecologia',
				images: [
					{title: 'Cabo de Temperatura', name: 'Cabo Temperatura.jpg'},
					{title: 'Sonda de Temperatura', name: 'Sonda Temperatura.JPG'}
				]
			},
			{
				id: 'OBSTETRICIA',
				title: 'Obstetrícia',
				images: [
					{title: 'Cabo de Temperatura', name: 'Cabo Temperatura.jpg'},
					{title: 'Sonda de Temperatura', name: 'Sonda Temperatura.JPG'}
				]
			},
			{
				id: 'OFTALMOLOGIA',
				title: 'Oftalmologia',
				images: [
					{title: 'Sonda de Temperatura', name: 'CATARATA.JPG'}
				]
			},
			{
				id: 'ORTOPEDIA',
				title: 'Ortopedia',
				images: [
					{title: 'Cabo de Temperatura', name: 'Cabo Temperatura.jpg'},
					{title: 'Sonda de Temperatura', name: 'Sonda Temperatura.JPG'}
				]
			},
			{
				id: 'OTORRINO',
				title: 'Otorrino',
				images: [
					{title: 'Sonda de Temperatura', name: 'Suporte ORL.JPG'}
				],
				folders: [

				]
			},
			{
				id: 'UROLOGIA',
				title: 'Urologia',
				images: [
					{title: 'Cabo de Temperatura', name: 'Cabo Temperatura.jpg'},
					{title: 'Sonda de Temperatura', name: 'Sonda Temperatura.JPG'}
				]
			}
		]
	},
	{
		id: 'MaterialExterno',
		title: 'Externo',
		images: [
			{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
		],
		folders: []
	},
	{
		id: 'MaterialServicos',
		title: 'Serviços',
		images: [
			{title: 'Tooltip Test', name: 'MICRO MOTOR.JPG'}
		],
		folders: []
	}
];