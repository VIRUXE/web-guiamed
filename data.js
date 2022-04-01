const basePath = '';
const data = [
	{
		id: 'Informacoes',
		name: 'Informações',
		images: [
			{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
		],
		folders: [
			{
				id: 'DESCONTAMINAÇÃO',
				name: 'Descontaminação',
				images: [
					{tip: 'Tooltip Test', src: 'Filtros Bomba Leite.JPG'},
					{tip: 'Tooltip Test', src: 'Kit Fisiatria.JPG'},
					{tip: 'Tooltip Test', src: 'Sonda Temperatura.JPG'}
				],
				folders: []
			}
		]
	},
	{
		id: 'MaterialAmbulatorio',
		name: 'Ambulatório',
		images: [
			{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
		],
		folders: [
			{
				id: 'ANASTESIA',
				name: 'Anastesia',
				images: [
					{tip: 'Tooltip Test', src: 'Mascaras Faciais.JPG'},
					{tip: 'Tooltip Test', src: 'Sonda Temperatura Amb..JPG'},
					{tip: 'Tooltip Test', src: 'Tabuleiro Cateter Central Amb. (2 un).JPG'},
					{tip: 'Tooltip Test', src: 'Tabuleiro Raqui.JPG'}
				]
			},
			{
				id: 'CIRURGIA_GERAL',
				name: 'Cirurgia Geral',
				folders: [
					{
						id: 'CAIXA CIR. VASCULAR',
						name: 'Caixa Cir. Vascular',
						images: [
							{tip: 'Tooltip Test', src: 'Cx Cirg. Vascular Amb..JPG'}
						]
					},
					{
						id: 'CAIXA LAPAROTOMIA',
						name: 'Caixa Laparotmia',
						images: [
							{tip: 'Tooltip Test', src: 'Cx Laparotomia Amb..JPG'},
							{tip: 'Tooltip Test', src: 'Cx nova Amb..JPG'},
							{tip: 'Tooltip Test', src: 'Laparotomia Amb. 60 pçs'}
						]
					},
					{
						id: 'FININHO 7 CX',
						name: 'Fininho',
						images: [
							{tip: 'Tooltip Test', src: 'CX. FININHO  37 Pç.JPG'}
						]
					},
					{
						id: 'LAPAROSCOPIA',
						name: 'Laparoscopia',
						images: [
							{tip: 'Tooltip Test', src: 'TAB. LAPAROSCOPIA AMB..JPG'}
						]
					},
					{
						id: 'PARTES MOLES 8 CX',
						name: 'Partes Moles',
						images: [
							{tip: 'Tooltip Test', src: 'Cx Partes Moles.JPG'}
						]
					},
					{
						id: 'PEQ. CIRURGIA 6 CX',
						name: 'Peq. Cirurgia',
						images: [
							{tip: 'Tooltip Test', src: 'Cx Peq. Cirg..JPG'}
						]
					}
				]
			},
			{
				id: 'CIRURGIA_PLASTICA',
				name: 'Cirurgia Plástica',
				images: [
					{tip: 'Tooltip Test', src: 'BASE METALICA 3 UNIDADES.JPG'},
					{tip: 'Tooltip Test', src: 'DERMÁTOMO ANTIGO + LAMINAS.JPG'},
					{tip: 'Tooltip Test', src: 'DERMÁTOMO ELÉCTRICO.JPG'},
					{tip: 'Tooltip Test', src: 'EXPANSOR DE PELE.JPG'},
					{tip: 'Tooltip Test', src: 'Kit Plastica Amb. (10pç).JPG'},
					{tip: 'Tooltip Test', src: 'QUADRADO ALUMINIO.JPG'}
				]
			},
			{
				id: 'OFTALMOLOGIA',
				name: 'Oftalmologia',
				images: [
					{tip: 'Tooltip Test', src: 'OFT.JPG'},
					{tip: 'Tooltip Test', src: 'Peças Dr Gabriel.JPG'}
				],
				folders: [
					{
						id: 'CATARATA',
						name: 'Catarata',
						images: [
							{tip: 'Tooltip Test', src: 'Catarata.JPG'},
							{tip: 'Tooltip Test', src: 'Disposiçao na cx.JPG'}
						]
					},
					{
						id: 'CATARATA COMPLICADA',
						name: 'Catarata Complicada',
						images: [
							{tip: 'Tooltip Test', src: 'Catarata complicada.JPG'}
						]
					},
					{
						id: 'Chalasio e pequena cir',
						name: 'Chalasio e Pequena Cir.',
						images: [
							{tip: 'Tooltip Test', src: 'CNLS8140.JPG'},
							{tip: 'Tooltip Test', src: 'Cx. Peq. Cirugia Oft..JPG'},
							{tip: 'Tooltip Test', src: 'GWMO9213.JPG'},
							{tip: 'Tooltip Test', src: 'OYVQ9357.JPG'},
							{tip: 'Tooltip Test', src: 'VNPC2918.JPG'}
						]
					},
					{
						id: 'ENUCLEAÇÃO',
						name: 'Enucleação',
						images: [
							{tip: 'Tooltip Test', src: 'Cx. Enucleaçao.JPG'}
						]
					},
					{
						id: 'GLAUCOMA',
						name: 'Glaucoma',
						images: [
							{tip: 'Tooltip Test', src: 'glaucoma 3.JPG'},
							{tip: 'Tooltip Test', src: 'Glaucoma verde.JPG'},
							{tip: 'Tooltip Test', src: 'Glaucoma.JPG'}
						]
					},
					{
						id: 'PETERIGIO',
						name: 'Peterigio',
						images: [
							{tip: 'Tooltip Test', src: 'Disposição do material na caixa.JPG'}
						],
						folders: [
							{
								id: 'Cx 1 a 4 peterígio',
								name: 'Caixa 1 a 4',
								images: [
									{tip: 'Tooltip Test', src: '1 Cx Peterígeo Roxa.JPG'},
									{tip: 'Tooltip Test', src: '2 Cx Peterígeo Laranja'},
									{tip: 'Tooltip Test', src: '3 Cx Peterígeo verde preto'},
									{tip: 'Tooltip Test', src: '4 Cx Peterígeo Rosa.JPG'}
								]
							}
						]
					},
					{
						id: 'VITRECTOMIA',
						name: 'Vitrectomia',
						images: [
							{tip: 'Tooltip Test', src: 'Cabo vitrectomia com chave e agulhas.JPG'},
							{tip: 'Tooltip Test', src: 'Cx Vitrectomia.JPG'}
						]
					}
				]
			},
			{
				id: 'ORL',
				name: 'ORL',
				images: [
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'},
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'},
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'},
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
				]
			},
			{
				id: 'ORTOPEDIA',
				name: 'Ortopedia',
				images: [
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'},
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'},
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'},
					{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
				]
			}
		]
	},
	{
		id: 'MaterialBlocoCentral',
		name: 'Bloco Central',
		images: [
			{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
		],
		folders: []
	},
	{
		id: 'MaterialExterno',
		name: 'Externo',
		images: [
			{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
		],
		folders: []
	},
	{
		id: 'MaterialServicos',
		name: 'Serviços',
		images: [
			{tip: 'Tooltip Test', src: 'MICRO MOTOR.JPG'}
		],
		folders: []
	}
];