export const transformItem = model => {
    return {
        ...model,
        modelDescription: `${model.OCG[1].OC[0].MBS} Kod: ${model.C} ${model.N}`,
        information: [[
            `${model.D} ${model.DAY} ${model.LN}`,
            'Yorumlar',
            '',
            model.OCG[1].OC[0].N,
            model.OCG[1].OC[1].N,
            '2',
            model.OCG[5].OC[25].N,
            model.OCG[5].OC[26].N,
            'H1',
            '1',
            'X',
            '2',
            'H2',
            model.OCG[2].OC[3].N,
            model.OCG[2].OC[4].N,
            model.OCG[2].OC[5].N,
            'Var',
            'Yok',
            '+99'
        ],
        [
            `${model.C} ${model.T} ${model.N}`,
            '',
            model.OCG[1].OC[0].MBS,
            Number(model.OCG[1].OC[0].O),
            Number(model.OCG[1].OC[1].O),
            '',
            Number(model.OCG[5].OC[25].O),
            Number(model.OCG[5].OC[26].O),
            '',
            '',
            '',
            '',
            '',
            Number(model.OCG[2].OC[3].O),
            Number(model.OCG[2].OC[4].O),
            Number(model.OCG[2].OC[5].O),
            '',
            '',
            '',
        ]
        ]
    }
}