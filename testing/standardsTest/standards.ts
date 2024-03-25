// static examples of the various primitives. These are the fodder for the general standards test agains the Matter class
// code: the CESR code
// length: the length of the encoded primitive, including code (from spec code tables)
// values: the specific examples where:
//  raw: is the sample value as a hexstring and
//  text: is the expected encoded value
export const standards = {
  matter: [
    {
      pad: 'one',
      examples: [
        {
          code: 'A',
          length: 44,
          values: [
            {
              raw: '858e916d31869a4cf1067052b346d7cb1345c91e15c10c5ddc4a73d4ceb03ea2',
              text: 'AIWOkW0xhppM8QZwUrNG18sTRckeFcEMXdxKc9TOsD6i'
            },
            {
              raw: '39d9508ed1d58c8b7ad8412d76c33f8b0fb18db6e06d5ab9884ebd1712e443d3',
              text: 'ADnZUI7R1YyLethBLXbDP4sPsY224G1auYhOvRcS5EPT'
            },
            {
              raw: '61ae197b0db9014f2b6f07b80e162b075a51dfdb5160300beef07387a2596419',
              text: 'AGGuGXsNuQFPK28HuA4WKwdaUd_bUWAwC-7wc4eiWWQZ'
            },
            {
              raw: 'eea1f8eee09785feb9c0386fe2cc409866ba14b81dbb294c1774e6df8a0a85c9',
              text: 'AO6h-O7gl4X-ucA4b-LMQJhmuhS4HbspTBd05t-KCoXJ'
            },
            {
              raw: '89596debaf3abab5c07cf116e2769f28115c2d2f5cc3453da1fb89b573ee0303',
              text: 'AIlZbeuvOrq1wHzxFuJ2nygRXC0vXMNFPaH7ibVz7gMD'
            }
          ]
        },
        {
          code: 'B',
          length: 44,
          values: [
            {
              raw: '3cc6475abaafecaccc972c951ab9b2fa1b77c15f760a99a2ad512d22c631f627',
              text: 'BDzGR1q6r-yszJcslRq5svobd8FfdgqZoq1RLSLGMfYn'
            },
            {
              raw: '665f49a3d1b5fed48140649b0c9b94d5e7ef5b6594b3e2f22ce8e8cffef740f0',
              text: 'BGZfSaPRtf7UgUBkmwyblNXn71tllLPi8izo6M_-90Dw'
            },
            {
              raw: 'e01bf1473e2d4f329de6ad37512d048f1b687633c00bdc08f362292a8d3ebe97',
              text: 'BOAb8Uc-LU8yneatN1EtBI8baHYzwAvcCPNiKSqNPr6X'
            },
            {
              raw: '92de313d61ac7d44ed5cf61e10b4a2c33c4bee38758d0873d7a1b4783893fa6a',
              text: 'BJLeMT1hrH1E7Vz2HhC0osM8S-44dY0Ic9ehtHg4k_pq'
            },
            {
              raw: '5401fd73635d1eee3b351773974f1f6661d8b95309771da4baf9b954cc800295',
              text: 'BFQB_XNjXR7uOzUXc5dPH2Zh2LlTCXcdpLr5uVTMgAKV'
            }
          ]
        },
        {
          code: 'C',
          length: 44,
          values: [
            {
              raw: '75c98c6b7f70ab949d76333c0ad68dc8deb4382aef476a2d57ac609006f85500',
              text: 'CHXJjGt_cKuUnXYzPArWjcjetDgq70dqLVesYJAG-FUA'
            },
            {
              raw: '6b8da0610356225e43b144c955f76be6160e29ef48aa15d2cc98f7f379a2b806',
              text: 'CGuNoGEDViJeQ7FEyVX3a-YWDinvSKoV0syY9_N5orgG'
            },
            {
              raw: 'cead777a1919cb435b47815a4404b2bfa0cae5c49a4a26b8cbd1238dc597e816',
              text: 'CM6td3oZGctDW0eBWkQEsr-gyuXEmkomuMvRI43Fl-gW'
            },
            {
              raw: 'cb8a510c02b64faa40a83d7f955d78adbdd4af4829234a9abc90f724e02eb175',
              text: 'CMuKUQwCtk-qQKg9f5VdeK291K9IKSNKmryQ9yTgLrF1'
            },
            {
              raw: 'f87a9ff617eec7a118eaaf44b5530092a0fe05d164dd3953ef927c265ddff03e',
              text: 'CPh6n_YX7sehGOqvRLVTAJKg_gXRZN05U--SfCZd3_A-'
            }
          ]
        },
        {
          code: 'D',
          length: 44,
          values: [
            {
              raw: '3cc6475abaafecaccc972c951ab9b2fa1b77c15f760a99a2ad512d22c631f627',
              text: 'DDzGR1q6r-yszJcslRq5svobd8FfdgqZoq1RLSLGMfYn'
            },
            {
              raw: '665f49a3d1b5fed48140649b0c9b94d5e7ef5b6594b3e2f22ce8e8cffef740f0',
              text: 'DGZfSaPRtf7UgUBkmwyblNXn71tllLPi8izo6M_-90Dw'
            },
            {
              raw: 'e01bf1473e2d4f329de6ad37512d048f1b687633c00bdc08f362292a8d3ebe97',
              text: 'DOAb8Uc-LU8yneatN1EtBI8baHYzwAvcCPNiKSqNPr6X'
            },
            {
              raw: '92de313d61ac7d44ed5cf61e10b4a2c33c4bee38758d0873d7a1b4783893fa6a',
              text: 'DJLeMT1hrH1E7Vz2HhC0osM8S-44dY0Ic9ehtHg4k_pq'
            },
            {
              raw: '5401fd73635d1eee3b351773974f1f6661d8b95309771da4baf9b954cc800295',
              text: 'DFQB_XNjXR7uOzUXc5dPH2Zh2LlTCXcdpLr5uVTMgAKV'
            }
          ]
        },
        {
          code: 'E',
          length: 44,
          values: [
            {
              raw: 'b517a498bf554ab419bbcaa61be07af412d33348eed4b44bd45384550df82d41',
              text: 'ELUXpJi_VUq0GbvKphvgevQS0zNI7tS0S9RThFUN-C1B'
            },
            {
              raw: 'a18452e2ba2af0a8da60e34463636e303181c5768b4fdcb0f206b862a5c3f8b3',
              text: 'EKGEUuK6KvCo2mDjRGNjbjAxgcV2i0_csPIGuGKlw_iz'
            },
            {
              raw: '37fb887452ffdb2988c92d993ce1af27427251ed3146826f04ed30582ce63d4c',
              text: 'EDf7iHRS_9spiMktmTzhrydCclHtMUaCbwTtMFgs5j1M'
            },
            {
              raw: '3fd6aa5f6d376721bdea42120c137394a2ae297ea709821dde91d62a947ae9c4',
              text: 'ED_Wql9tN2chvepCEgwTc5Siril-pwmCHd6R1iqUeunE'
            },
            {
              raw: '6d3035a2cd65f1904bf8be27a69b8b7115abe1dabcbd7a38265d2808f11cb717',
              text: 'EG0wNaLNZfGQS_i-J6abi3EVq-HavL16OCZdKAjxHLcX'
            }
          ]
        },
        {
          code: 'F',
          length: 44,
          values: [
            {
              raw: 'c8e63d9e7d7d8f222e3162698466791370fc5926484a294d23c33849c177d6da',
              text: 'FMjmPZ59fY8iLjFiaYRmeRNw_FkmSEopTSPDOEnBd9ba'
            },
            {
              raw: 'f0c48bda4e48e424ea0fb5797b43c07d39b1530afed484045f9df47fb0f3cc531',
              text: 'FPDEi9pOSOQk6g-1eXtDwH05sVMK_tSEBF-d9H-w88xT'
            },
            {
              raw: '86f1e8f4d7854bb52d234c84ad48792e2d39df3e63d59aeb0713a75053ad7b1fd',
              text: 'FIbx6PTXhUu1LSNMhK1IeS4tOd8-Y9Wa6wcTp1BTrXsf'
            },
            {
              raw: '4e7857cf55c509cf86d245fe68265705e1e91f0d07f8a64b33a616ba6d19ab701',
              text: 'FE54V89VxQnPhtJF_mgmVwXh6R8NB_imSzOmFrptGatw'
            },
            {
              raw: '6bea02b3834beae4374977a67aaecfa3b0c9d3f4b0d6a1f10879e64d2f1d2a5bc',
              text: 'FGvqArODS-rkN0l3pnquz6OwydP0sNah8Qh55k0vHSpb'
            }
          ]
        },
        {
          code: 'G',
          length: 44,
          values: [
            {
              raw: 'cb91d3ff78b2198f71d30f0cd8d58dcdd86f9f1f2cdd32074ff75f7e9c7e21cc',
              text: 'GMuR0_94shmPcdMPDNjVjc3Yb58fLN0yB0_3X36cfiHM'
            },
            {
              raw: '14aae01c915e6d96f4a3c8b07f18ab7b54e564ea9edf74c5563d0bf0f1718dd3',
              text: 'GBSq4ByRXm2W9KPIsH8Yq3tU5WTqnt90xVY9C_DxcY3T'
            },
            {
              raw: '2080982ef42d6be9c30716c33633f0b4e8f35f7e031e5822e4f6e994617aee2e',
              text: 'GCCAmC70LWvpwwcWwzYz8LTo819-Ax5YIuT26ZRheu4u'
            },
            {
              raw: 'acbaae18d8f5c4bc7ff46f6edab63050d65d1bbaaed37225fda8eb2ec8f87257',
              text: 'GKy6rhjY9cS8f_Rvbtq2MFDWXRu6rtNyJf2o6y7I-HJX'
            },
            {
              raw: '6ebc23dd5754bf5df268dd3e3b368a96d1e8db719b0e5e7971f7f4e9d5ee761f',
              text: 'GG68I91XVL9d8mjdPjs2ipbR6Ntxmw5eeXH39OnV7nYf'
            }
          ]
        },
        {
          code: 'H',
          length: 44,
          values: [
            {
              raw: '0c52b16b0101ba42ee173a341b3c0e926ab77571db0b2e828a90c23331b18788',
              text: 'HAxSsWsBAbpC7hc6NBs8DpJqt3Vx2wsugoqQwjMxsYeI'
            },
            {
              raw: '365e2121d72c3ad0ec0e1e39b7ed7481b5db8223d24be4b2e32c09cb301f5355',
              text: 'HDZeISHXLDrQ7A4eObftdIG124Ij0kvksuMsCcswH1NV'
            },
            {
              raw: '062d2c49cb002b2e514aa1bf5ec334c60a78a25b012ea0081cc785b91ef5d933',
              text: 'HAYtLEnLACsuUUqhv17DNMYKeKJbAS6gCBzHhbke9dkz'
            },
            {
              raw: '2cb8c57af1e07c9dc517ef650f44da9a3f25019ed6f00f15bf2609c929f8c488',
              text: 'HCy4xXrx4HydxRfvZQ9E2po_JQGe1vAPFb8mCckp-MSI'
            },
            {
              raw: '22946046b0f72b188a1880c787e3eb758f7d99eef435a74e1835e108f80a0a6f',
              text: 'HCKUYEaw9ysYihiAx4fj63WPfZnu9DWnThg14Qj4Cgpv'
            }
          ]
        },
        {
          code: 'I',
          length: 44,
          values: [
            {
              raw: 'fddeca56469d697c66ac2b32c43d9ac2405b2cc0241a2e8ed6d59dd7c70249c0',
              text: 'IP3eylZGnWl8ZqwrMsQ9msJAWyzAJBoujtbVndfHAknA'
            },
            {
              raw: '3db80a61654755c8e5d9f44e8f2e4f6661be9475e1dd62a797ad8a34c91d055b',
              text: 'ID24CmFlR1XI5dn0To8uT2ZhvpR14d1ip5etijTJHQVb'
            },
            {
              raw: '0e0e7b18eb42d66f5f16d91786b3e17382c9b78a212f0026090ab4cb4c6110d3',
              text: 'IA4OexjrQtZvXxbZF4az4XOCybeKIS8AJgkKtMtMYRDT'
            },
            {
              raw: '8d52d7de37438e2289d8820e00cf9d62b60c87c08759399b8d95d9e9ed9dbf36',
              text: 'II1S1943Q44iidiCDgDPnWK2DIfAh1k5m42V2entnb82'
            },
            {
              raw: '0633943b479376d7e79cfba50661521a7d61a0bb3448c3f2d98b992c893c0b9e',
              text: 'IAYzlDtHk3bX55z7pQZhUhp9YaC7NEjD8tmLmSyJPAue'
            }
          ]
        },
        {
          code: 'J',
          length: 44,
          values: [
            {
              raw: '6f5291fd5e3a271bc9a5d77e77bfc38f70e889c1b4d1cf034a5e537045f3b5c8',
              text: 'JG9Skf1eOicbyaXXfne_w49w6InBtNHPA0peU3BF87XI'
            },
            {
              raw: 'e9b4568f1e93c92a70a20c22a7e4c4bfc83e4e7a8b8325d3b43c7a31b937bdc5',
              text: 'JOm0Vo8ek8kqcKIMIqfkxL_IPk56i4Ml07Q8ejG5N73F'
            },
            {
              raw: '3f53d2aafe2a2b3c7e6256a61f89644a4ebc1d92343150b1586c90ab81c43e2e',
              text: 'JD9T0qr-Kis8fmJWph-JZEpOvB2SNDFQsVhskKuBxD4u'
            },
            {
              raw: '90f1ae94a87f5b31d621308e3f7fb39f87b85f3d3de245c3d57f75ee59056b8a',
              text: 'JJDxrpSof1sx1iEwjj9_s5-HuF89PeJFw9V_de5ZBWuK'
            },
            {
              raw: 'a1c8062f7d91a7b52ac0e1875bc12f0f4e95d4d7d7252e16c68c3b2eb1e2b8d9',
              text: 'JKHIBi99kae1KsDhh1vBLw9OldTX1yUuFsaMOy6x4rjZ'
            }
          ]
        },
        {
          code: 'M',
          length: 4,
          values: [
            {
              raw: '6ae3',
              text: 'MGrj'
            },
            {
              raw: 'b7e2',
              text: 'MLfi'
            },
            {
              raw: '3f3b',
              text: 'MD87'
            },
            {
              raw: '8d90',
              text: 'MI2Q'
            },
            {
              raw: 'e2ff',
              text: 'MOL_'
            }
          ]
        },
        {
          code: 'N',
          length: 12,
          values: [
            {
              raw: 'c6e64b12b9fe842c',
              text: 'NMbmSxK5_oQs'
            },
            {
              raw: 'a3f8d5704b9e6310',
              text: 'NKP41XBLnmMQ'
            },
            {
              raw: '7cb569c376159d1a',
              text: 'NHy1acN2FZ0a'
            },
            {
              raw: '9a5bf1c8ae63b027',
              text: 'NJpb8ciuY7An'
            },
            {
              raw: '0d5f2816ca3098e7',
              text: 'NA1fKBbKMJjn'
            }
          ]
        },
        {
          code: 'O',
          length: 44,
          values: [
            {
              raw: 'f7e5518d7ac1d9bf8c1244090a3b2a4481e0d4af3e4d25332187262d29925f77',
              text: 'OPflUY16wdm_jBJECQo7KkSB4NSvPk0lMyGHJi0pkl93'
            },
            {
              raw: 'a72fc11b0710ae53cb7c4f3622359eb7a8d27512dd18942dd413417e02d7b84e',
              text: 'OKcvwRsHEK5Ty3xPNiI1nreo0nUS3RiULdQTQX4C17hO'
            },
            {
              raw: 'b384d0e7e7bde2582fd12be6362e77b78eb01af81d0b2f9e04565079b9122e7c',
              text: 'OLOE0OfnveJYL9Er5jYud7eOsBr4HQsvngRWUHm5Ei58'
            },
            {
              raw: '70e56c94eabfb7ff8a2fe73a126d9f1b1b7c82d2c9295f67b93bb6d379e46cc3',
              text: 'OHDlbJTqv7f_ii_nOhJtnxsbfILSySlfZ7k7ttN55GzD'
            },
            {
              raw: 'b6d00770aa4a6b75f3d059eb6e4b7b0e4d93b8b5878d29f49f986f95dc0e4470',
              text: 'OLbQB3CqSmt189BZ625Lew5Nk7i1h40p9J-Yb5XcDkRw'
            }
          ]
        }
      ]
    },
    {
      pad: 'two',
      examples: [
        {
          code: '0A',
          length: 24,
          values: [
            {
              raw: '784d092dc4a2ec260d9728b9341e1a7c',
              text: '0AB4TQktxKLsJg2XKLk0Hhp8'
            },
            {
              raw: 'e7dd8db8d223ec92accb322f13596568',
              text: '0ADn3Y240iPskqzLMi8TWWVo'
            },
            {
              raw: '39aa391b5b820de57df633ac0025af16',
              text: '0AA5qjkbW4IN5X32M6wAJa8W'
            },
            {
              raw: 'a528c1211d1116ad204f28e181ddbc7f',
              text: '0AClKMEhHREWrSBPKOGB3bx_'
            },
            {
              raw: '82ffe6f6f680915386920e925ed23204',
              text: '0ACC_-b29oCRU4aSDpJe0jIE'
            }
          ]
        },
        {
          code: '0B',
          length: 88,
          values: [
            {
              raw: '8cb872b8731604949611b8872026c3e4f7482973031773b3fa87b11f4c9c6112c4170f5ee2cd182ba5819c553a7bb9e323cd2f8aaf372ed57d47d9385761810a',
              text: '0BCMuHK4cxYElJYRuIcgJsPk90gpcwMXc7P6h7EfTJxhEsQXD17izRgrpYGcVTp7ueMjzS-Krzcu1X1H2ThXYYEK'
            },
            {
              raw: 'e7479d9eb057be7126a45cd84cebdff7bb3881afabdec79836a248f0fd4fecc0cf1650cf99ede7556b32ecb415e3bcf0d6ce2d19a02e514e735ecd0df0b75a0e',
              text: '0BDnR52esFe-cSakXNhM69_3uziBr6vex5g2okjw_U_swM8WUM-Z7edVazLstBXjvPDWzi0ZoC5RTnNezQ3wt1oO'
            }
          ]
        },
        {
          code: '0C',
          length: 88,
          values: [
            {
              raw: 'c5a0fa6553445a4fefb8b2ce35351788459271b55a548ea0674194afa8200c8e1186ab6aa231ffff58cff6bec2d96ea29cac5f4daf2972c3ac5f8c8db328f9dc',
              text: '0CDFoPplU0RaT--4ss41NReIRZJxtVpUjqBnQZSvqCAMjhGGq2qiMf__WM_2vsLZbqKcrF9Nrylyw6xfjI2zKPnc'
            },
            {
              raw: '934cd3a7265d1a1af67694af84d200d97f3faaf478f1be4f488b2639b6c9560154fff40a39250cc31bb122d8f25862ac373cab3bf590328f7556fff4f5318094',
              text: '0CCTTNOnJl0aGvZ2lK-E0gDZfz-q9Hjxvk9IiyY5tslWAVT_9Ao5JQzDG7Ei2PJYYqw3PKs79ZAyj3VW__T1MYCU'
            },
            {
              raw: 'fdbc3df8f44217a623e9e8aea7253719f4af8f59e7ee78a7783643342efed153278bd4f5e17d9e68909aee401d732584a6e9f958a5806fa82591c5f6ada916e1',
              text: '0CD9vD349EIXpiPp6K6nJTcZ9K-PWefueKd4NkM0Lv7RUyeL1PXhfZ5okJruQB1zJYSm6flYpYBvqCWRxfatqRbh'
            },
            {
              raw: 'dea61652f4211fa70e9ee55e731a3013a64de265611f75b71921520bca91234e6bb1f3fed9e0e2db71cd92124706615ea40b37dd51ccf08cba0d04bf75b1e514',
              text: '0CDephZS9CEfpw6e5V5zGjATpk3iZWEfdbcZIVILypEjTmux8_7Z4OLbcc2SEkcGYV6kCzfdUczwjLoNBL91seUU'
            },
            {
              raw: 'a6e78fb83dfd8992071fcbdff4e16af9ae7b2ed75cd7faf3120ddf075a0883cc035f538dee0090115d47db5ebbf20bda78e81bee11a4fd7298ae238ad06c0467',
              text: '0CCm54-4Pf2Jkgcfy9_04Wr5rnsu11zX-vMSDd8HWgiDzANfU43uAJARXUfbXrvyC9p46BvuEaT9cpiuI4rQbARn'
            }
          ]
        },
        {
          code: '0D',
          length: 88,
          values: [
            {
              raw: 'adbe20f5337fe64da42575bfb20372e24d3ff67fb3c57c15e2a21b387d67c7e96373a3cf984e1548ac064cf9389cef6763ae1f828a963287f6ba7cbc79521e29',
              text: '0DCtviD1M3_mTaQldb-yA3LiTT_2f7PFfBXiohs4fWfH6WNzo8-YThVIrAZM-Tic72djrh-CipYyh_a6fLx5Uh4p'
            },
            {
              raw: '347fa2163e71b2f3a2ceeb7cd31034540585e5d1933012aaf9319e7756b8076c5390223cfc4f2361317cd103eb7a7600f66ebacbe9d12469f3ae43882dad8976',
              text: '0DA0f6IWPnGy86LO63zTEDRUBYXl0ZMwEqr5MZ53VrgHbFOQIjz8TyNhMXzRA-t6dgD2brrL6dEkafOuQ4gtrYl2'
            },
            {
              raw: '3a146daa178fa1ee2ec8aa5c73749d7423addcf1298856ec885606996959e45ff206ac6670a89fdae61f94045a05be90f9bd990a0213d3846b1edb6646747a73',
              text: '0DA6FG2qF4-h7i7IqlxzdJ10I63c8SmIVuyIVgaZaVnkX_IGrGZwqJ_a5h-UBFoFvpD5vZkKAhPThGse22ZGdHpz'
            },
            {
              raw: '49f9d42a6f139c52c6fbf1776edf8721d0f815a3f39884931b716cfb415bcbdce034c3c5cdd8c60111f7ce5cf7dc0414a4b8d8c021b260fd8a955955b7f07e0c',
              text: '0DBJ-dQqbxOcUsb78Xdu34ch0PgVo_OYhJMbcWz7QVvL3OA0w8XN2MYBEffOXPfcBBSkuNjAIbJg_YqVWVW38H4M'
            },
            {
              raw: '5b461d74083e9359929957bc6756378f7dafede7c1eef28091564604bfdcbcc4dc9d557af7eab2c43977a4a51d01f82d9b8632f5b54d7e024af707b05baf61b1',
              text: '0DBbRh10CD6TWZKZV7xnVjePfa_t58Hu8oCRVkYEv9y8xNydVXr36rLEOXekpR0B-C2bhjL1tU1-Akr3B7Bbr2Gx'
            }
          ]
        },
        {
          code: '0E',
          length: 88,
          values: [
            {
              raw: '5bfe9207ddbcf530824fdfebf09390df804d7745b7337cdb146ace9fb0ab8b8edc42d799168d8f181cbf4ba8a7236f2e470202f9c40f81e8e419bcc8e5b933c8',
              text: '0EBb_pIH3bz1MIJP3-vwk5DfgE13RbczfNsUas6fsKuLjtxC15kWjY8YHL9LqKcjby5HAgL5xA-B6OQZvMjluTPI'
            },
            {
              raw: 'f5be6a9a15c11609dab9eba53e6d66497306fa91835b193b9384c26802a34f5e075250c968fe20da529465bec9eeaac5e24362cf56f18d44cec5699fe76a2509',
              text: '0ED1vmqaFcEWCdq566U-bWZJcwb6kYNbGTuThMJoAqNPXgdSUMlo_iDaUpRlvsnuqsXiQ2LPVvGNRM7FaZ_naiUJ'
            },
            {
              raw: '66aaccee9a5bce00c1eab49a18ce8a4d8f9b68e629c9b3edf0666f37452e2c6ebb0df5bbebb0ab21d0f0c57713c1871db6c3f03c6106ce3aa532591d3e32c40e',
              text: '0EBmqszumlvOAMHqtJoYzopNj5to5inJs-3wZm83RS4sbrsN9bvrsKsh0PDFdxPBhx22w_A8YQbOOqUyWR0-MsQO'
            },
            {
              raw: '726f03fa74afce792320666a7f43b37a6b19188add0571aaa3ae5f46e0b4a2af64a5e88ddf5ecd2f8b9ca992e766e4a539c83983b85404c5fdac686aa153aed6',
              text: '0EBybwP6dK_OeSMgZmp_Q7N6axkYit0Fcaqjrl9G4LSir2Sl6I3fXs0vi5ypkudm5KU5yDmDuFQExf2saGqhU67W'
            },
            {
              raw: 'f62f843fbddf045f731ff95331d0d3b3a00e02cddbec197dfc18099a9a6006d7b535f7ce7914ce458500f4926b99667ff639ffe4249ecae52fb2f05594272940',
              text: '0ED2L4Q_vd8EX3Mf-VMx0NOzoA4CzdvsGX38GAmammAG17U19855FM5FhQD0kmuZZn_2Of_kJJ7K5S-y8FWUJylA'
            }
          ]
        },
        {
          code: '0F',
          length: 88,
          values: [
            {
              raw: '1af4f1196ba3ec4781a919983b206407e99234db0ba1f616e3258959693d60738be207b3b1c9a997955ed8de6ea08cbe115665b6fceef4374a544174605444b3',
              text: '0FAa9PEZa6PsR4GpGZg7IGQH6ZI02wuh9hbjJYlZaT1gc4viB7OxyamXlV7Y3m6gjL4RVmW2_O70N0pUQXRgVESz'
            },
            {
              raw: 'b7b7c16b742f6cc61e28da2dd2a8c0b78f28c906d0fd144805d9161539f6a4c0f853a1f1eeef1c59a15f56b91be6a533124df5f946085f4c6229f79b0657b6e6',
              text: '0FC3t8FrdC9sxh4o2i3SqMC3jyjJBtD9FEgF2RYVOfakwPhTofHu7xxZoV9WuRvmpTMSTfX5RghfTGIp95sGV7bm'
            },
            {
              raw: 'd31fad43cd02adaa95df6f6083e1a15cf4342150358a14ce648f953dc0cc0b80458544c24d490544b5f3e42854bc013fe9f57c924c4f185f49b4726f1fde15e7',
              text: '0FDTH61DzQKtqpXfb2CD4aFc9DQhUDWKFM5kj5U9wMwLgEWFRMJNSQVEtfPkKFS8AT_p9XySTE8YX0m0cm8f3hXn'
            },
            {
              raw: '66796c34de3ed7fb610537e8df273abfa5946103972ca8ed777539de36e69b974372ea6c5f07a658f1ffd665c7940d016adce0d8bc3d94ce4459c667569da50c',
              text: '0FBmeWw03j7X-2EFN-jfJzq_pZRhA5csqO13dTneNuabl0Ny6mxfB6ZY8f_WZceUDQFq3ODYvD2UzkRZxmdWnaUM'
            },
            {
              raw: '5bcfa86d938cd22d884561d245d139ffa2a37ae22cc7854b26d7faa47f78f6d49217f7d2421d922438d90f4a7bb91e1acb70dfcb33f0fd4cfce2a71b9c26eb61',
              text: '0FBbz6htk4zSLYhFYdJF0Tn_oqN64izHhUsm1_qkf3j21JIX99JCHZIkONkPSnu5HhrLcN_LM_D9TPzipxucJuth'
            }
          ]
        },
        {
          code: '0G',
          length: 88,
          values: [
            {
              raw: '01e6d981d060da5305c0c4b798cfdca1f20bde68b4070e5a8b23cfa1016f4f249af48b265d7871f357279efdcba8678a35e0226fdd82edb775b72ebd56205528',
              text: '0GAB5tmB0GDaUwXAxLeYz9yh8gveaLQHDlqLI8-hAW9PJJr0iyZdeHHzVyee_cuoZ4o14CJv3YLtt3W3Lr1WIFUo'
            },
            {
              raw: 'b5e8e05b5281b4df3b3e1518220e7d93661960cb1b7d9c08f86a66ee8386799696c461bb592ca559082fe7bb3a843cd27e32c973d677c0ae1e4d821b13bc56e5',
              text: '0GC16OBbUoG03zs-FRgiDn2TZhlgyxt9nAj4ambug4Z5lpbEYbtZLKVZCC_nuzqEPNJ-Mslz1nfArh5NghsTvFbl'
            },
            {
              raw: 'e449839b82f6861fa9eb98ec6b089de8f7a8324a3151f275f2f0110ee1a4b888bf2738a20130858b816db80a4d8dce53f356b9e36dc2d17879a9ee50f17a2faf',
              text: '0GDkSYObgvaGH6nrmOxrCJ3o96gySjFR8nXy8BEO4aS4iL8nOKIBMIWLgW24Ck2NzlPzVrnjbcLReHmp7lDxei-v'
            },
            {
              raw: '685f2659c1409f1d8217e4ce43833c2c2069e3ed82264c70f2016359bc3295b47aa7db1ddeb9513e74216be2c5d452c95fff601e377be938810cad7134b40122',
              text: '0GBoXyZZwUCfHYIX5M5DgzwsIGnj7YImTHDyAWNZvDKVtHqn2x3euVE-dCFr4sXUUslf_2AeN3vpOIEMrXE0tAEi'
            },
            {
              raw: 'ce5d5131e29ba529371d5a73017a7a1a1272cda75deb19a0c9426045177b11d824a48611030d566b7acba94277ddfb0ab108252f5a76be0ec4daa8561846cb5e',
              text: '0GDOXVEx4pulKTcdWnMBenoaEnLNp13rGaDJQmBFF3sR2CSkhhEDDVZresupQnfd-wqxCCUvWna-DsTaqFYYRste'
            }
          ]
        },
        {
          code: '0H',
          length: 8,
          values: [
            {
              raw: '48fd43fd',
              text: '0HBI_UP9'
            },
            {
              raw: '822e72f5',
              text: '0HCCLnL1'
            },
            {
              raw: '48f3c9eb',
              text: '0HBI88nr'
            },
            {
              raw: '20e5ac52',
              text: '0HAg5axS'
            },
            {
              raw: 'ce60aabc',
              text: '0HDOYKq8'
            }
          ]
        }
      ]
    },
    {
      pad: 'four',
      examples: [
        {
          code: '1AAA',
          length: 48,
          values: [
            {
              raw: '02b4e3429fccb0541c8018d172325c2671c6a248df84aefc3b146f616b5a394762',
              text: '1AAAArTjQp_MsFQcgBjRcjJcJnHGokjfhK78OxRvYWtaOUdi'
            },
            {
              raw: '03a34d6f462f1b81a64c2a01cb7c8ad882a48ed215f954b4c4f5b6d687116bb03e',
              text: '1AAAA6NNb0YvG4GmTCoBy3yK2IKkjtIV-VS0xPW21ocRa7A-'
            },
            {
              raw: '0291e19a245ddc8ba29acb4159f89e8e1c974d8ec3db57c471fe1a5c2d8e4bafdc',
              text: '1AAAApHhmiRd3IuimstBWfiejhyXTY7D21fEcf4aXC2OS6_c'
            },
            {
              raw: '0369a092b6b5276b5f3ab509be3d74c6d8c7711a243a63ee1fabb0454df8ddf245',
              text: '1AAAA2mgkra1J2tfOrUJvj10xtjHcRokOmPuH6uwRU343fJF'
            },
            {
              raw: '025fb3d5f4b8769cfb3f19749103b8b9a1b17c7cb5dfc006c167b5d5a7f3b8c634',
              text: '1AAAAl-z1fS4dpz7Pxl0kQO4uaGxfHy138AGwWe11afzuMY0'
            }
          ]
        },
        {
          code: '1AAB',
          length: 48,
          values: [
            {
              raw: '029d8fb7ee8bee47d25a44fb3e83a4c1a1b5b5edf1d9ff7b2d3f3b5fe3b0ede8ac',
              text: '1AABAp2Pt-6L7kfSWkT7PoOkwaG1te3x2f97LT87X-Ow7eis'
            },
            {
              raw: '03e8f9b8a16e9a64b8e8f058b48b6f56d3ff8d9ee4af2bc43b6ba6488d9d72a6f1',
              text: '1AABA-j5uKFummS46PBYtItvVtP_jZ7kryvEO2umSI2dcqbx'
            },
            {
              raw: '027fbfecbce2d7b9c8d9a8b0a8e0be0b3d9a927d2a5b9e4e4a77af260e05dace28',
              text: '1AABAn-_7Lzi17nI2aiwqOC-Cz2akn0qW55OSnevJg4F2s4o'
            },
            {
              raw: '0323a1f8339b4a2186cfeb1216691a2fb5285234b094307b2d8d8d8af3a391a5ff',
              text: '1AABAyOh-DObSiGGz-sSFmkaL7UoUjSwlDB7LY2NivOjkaX_'
            },
            {
              raw: '02feab256e8b4f317bb5e85b4b4d7a2f2a7e362b4b5ee8af1c6aa907b30bfdc076',
              text: '1AABAv6rJW6LTzF7tehbS016Lyp-NitLXuivHGqpB7ML_cB2'
            }
          ]
        },
        {
          code: '1AAC',
          length: 80,
          values: [
            {
              raw: '9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890',
              text: '1AACmnaL_jBFzSGJq83vEjRWeJD-3LqYdlQyEKvN7xI0VniQq80SNO9WeJCrzRI071Z4kKvNEjTvVniQ'
            },
            {
              raw: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12',
              text: '1AACEjRWeJCrze8SNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN7xI0VniQq83vEjRWeJCrze8S'
            },
            {
              raw: 'fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fe',
              text: '1AAC_ty6mHZUMhD-3LqYdlQyEP7cuph2VDIQ_ty6mHZUMhD-3LqYdlQyEP7cuph2VDIQ_ty6mHZUMhD-'
            },
            {
              raw: 'abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890ab',
              text: '1AACq83vEjRWeJCrze8SNFZ4kKvN7xI0VniQq83vEjRWeJCrze8SNFZ4kKvN7xI0VniQq83vEjRWeJCr'
            },
            {
              raw: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01',
              text: '1AACASNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8B'
            }
          ]
        },
        {
          code: '1AAD',
          length: 80,
          values: [
            {
              raw: 'a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef012',
              text: '1AADobLD1OX2eJASNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8BI0VniavN7wEjRWeJq83vAS'
            },
            {
              raw: '123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef012',
              text: '1AADEjRWeJq83vASNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8BI0VniavN7wEjRWeJq83vAS'
            },
            {
              raw: 'fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fe',
              text: '1AAD_ty6mHZUMhD-3LqYdlQyEP7cuph2VDIQ_ty6mHZUMhD-3LqYdlQyEP7cuph2VDIQ_ty6mHZUMhD-'
            },
            {
              raw: '9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba98',
              text: '1AADmHZUMhD-3LqYdlQyEP7cuph2VDIQ_ty6mHZUMhD-3LqYdlQyEP7cuph2VDIQ_ty6mHZUMhD-3LqY'
            },
            {
              raw: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01',
              text: '1AADASNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8B'
            }
          ]
        },
        {
          code: '1AAE',
          length: 156,
          values: [
            {
              raw: 'f123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcd',
              text: '1AAE8SNFZ4mrze8BI0VniavN7wEjRWeJq83vASNFZ4mrze8BI0VniavN'
            },
            {
              raw: 'e9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210fed',
              text: '1AAE6YdlQyEP7cuph2VDIQ_ty6mHZUMhD-3LqYdlQyEP7cuph2VDIQ_t'
            },
            {
              raw: 'aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00',
              text: '1AAEqrvM3e7_ABEiM0RVZneImaq7zN3u_wARIjNEVWZ3iJmqu8zd7v8A'
            },
            {
              raw: '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566',
              text: '1AAEABEiM0RVZneImaq7zN3u_wARIjNEVWZ3iJmqu8zd7v8AESIzRFVm'
            },
            {
              raw: 'ffeeddccbbaa99887766554433221100ffeeddccbbaa99887766554433221100ffeeddccbbaa99',
              text: '1AAE_-7dzLuqmYh3ZlVEMyIRAP_u3cy7qpmId2ZVRDMiEQD_7t3Mu6qZ'
            }
          ]
        },
        {
          code: '1AAF',
          length: 8,
          values: [
            {
              raw: '464259',
              text: '1AAFRkJZ'
            },
            {
              raw: 'e4feff',
              text: '1AAF5P7_'
            },
            {
              raw: '493bcb',
              text: '1AAFSTvL'
            },
            {
              raw: 'e4482d',
              text: '1AAF5Egt'
            },
            {
              raw: 'e43537',
              text: '1AAF5DU3'
            }
          ]
        }
      ]
    }
  ]
}
