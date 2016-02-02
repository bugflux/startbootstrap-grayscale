
window.onload = function() {
	var div = document.createElement('div');
	div.id = 'container';

	var click = function(event, data) { window.location.reload() };

	var provider = new MuseicImageProvider({
		data: data,
		border: 5, // optional. default: 0
		events: {
			click: click
		}
	});

	new Mosaic({
		x: 1 + parseInt((window.innerWidth / window.devicePixelRatio) / 192, 10),
		y: 1 + parseInt((window.innerHeight / window.devicePixelRatio) / 192, 10),

		xMax: 6, // optional. default: x
		yMax: 4, // optional. default: y

		elem: div,
		provider: provider
	});

	document.body.appendChild(div);
}


var data = [
{url:'img/20130814-211301_0081_9e00ba2ae3a716b8.jpg'},
{url:'img/20130814-224126_0121_3ec917ce6eff48ba.jpg'},
{url:'img/20130814-224144_0122_0f98fef2d9f230ed.jpg'},
{url:'img/20130816-162955_0002_92e1d66c82297363.jpg'},
{url:'img/20130816-171845_0020_a3c627b720e149e0.jpg'},
{url:'img/20130816-175719_0028_9fe98458da04b80d.jpg'},
{url:'img/20130816-181836_0034_3c49b2b37c98d865.jpg'},
{url:'img/20130816-190017_0061_37d27fe49dac7bff.jpg'},
{url:'img/20130817-100440_0008_b1a09aab3cc17e33.jpg'},
{url:'img/20130817-154221_0004_45496827bab5ab88.jpg'},
{url:'img/20130818-171351_0060_cd7de96db06ccdb5.jpg'},
{url:'img/20130819-143348_0003_14e1bacd60c4d3a3.jpg'},
{url:'img/20130819-165737_0011_b5ba44dc487a0e05.jpg'},
{url:'img/20130820-202930_0073_7fe44862e4186a94.jpg'},
{url:'img/20130821-193120_0026_e2abacb28d05772b.jpg'},
{url:'img/20130824-071338_0029_65df3d31898c4437.jpg'},
{url:'img/20130824-072540_0035_cefac43834937cea.jpg'},
{url:'img/20130824-073936_0048_ef55d6c66fa7f046.jpg'},
{url:'img/20130824-081658_0087_9e9ba1cc95699c05.jpg'},
{url:'img/20130824-085634_0100_fe2dc3bb03cfd36f.jpg'},
{url:'img/20130824-092719_0132_e77a48172beb93c3.jpg'},
{url:'img/20130824-125707_0173_7fcd308c578d380b.jpg'},
{url:'img/20130826-195523_0054_0468aaa843c0b47d.jpg'},
{url:'img/20130826-201545_0080_0e16bf2347aa044c.jpg'},
{url:'img/20130831-164911_0007_9a364aba369c22a1.jpg'},
{url:'img/20130831-171314_0033_92642c34867f9972.jpg'},
{url:'img/20130831-171635_0042_85b49460abc19830.jpg'},
{url:'img/20130831-171910_0048_b5c44895f191e2fe.jpg'},
{url:'img/20130831-173317_0063_80c03d700150cb6d.jpg'},
{url:'img/20130831-180650_0105_e1b95125dc867e5a.jpg'},
{url:'img/20130908-175159_0065_09f89a731df63776.jpg'},
{url:'img/20130908-181421_0076_f7071ba26e6bda8f.jpg'},
{url:'img/20130915-120439_0011_b803cba1b540ef20.jpg'},
{url:'img/20130916-155946_0026_8ecacba954bb193f.jpg'},
{url:'img/20130916-160151_0028_7bccb08f7bec8be6.jpg'},
{url:'img/20130916-161045_0040_d71db7336da60542.jpg'},
{url:'img/20130917-124018_0006_2486470b9ea7921c.jpg'},
{url:'img/20130917-142325_0032_db454d26e54ab58e.jpg'},
{url:'img/20130918-112423_0046_1f38a48d31883506.jpg'},
{url:'img/20130918-154212_0141_f78605a3b05f88f8.jpg'},
{url:'img/20130918-172454_0216_7c682057fbc1782a.jpg'},
{url:'img/20130918-173015_0217_70e6049a55343c37.jpg'},
{url:'img/20130918-181338_0242_ab047adfb2bf3c6e.jpg'},
{url:'img/20130919-091252_0312_ae7229f068bd82be.jpg'},
{url:'img/20130919-091252_0312_ae7229f068bd82be_bw.jpg'},
{url:'img/20130919-104906_0350_796839ba285498e6.jpg'},
{url:'img/20130919-121455_0363_246657cad2756123.jpg'},
{url:'img/20130919-122258_0370_f1dd4a21940cb3c5.jpg'},
{url:'img/20130919-182715_0430_36cf7b1e0a65a57e.jpg'},
{url:'img/20130922-082022_0642_9a4555a8eaabe311.jpg'},
{url:'img/20130922-083002_0661_18bf655096c40dc6.jpg'},
{url:'img/20131013-165618_0042_64801a0540008cda.jpg'},
{url:'img/20131019-162134_0122_64d627fe7652039d.jpg'},
{url:'img/20131020-134304_0277_499f509b082631a1.jpg'},
{url:'img/20131026-155904_0027_1c5b4eae456027dc.jpg'},
{url:'img/20131026-161938_0095_214397c0baf1ab53.jpg'},
{url:'img/20131030-191144_0019_b3487894180406c8.jpg'},
{url:'img/20131030-191451_0021_0b0500d9cbfbc6db.jpg'},
{url:'img/20131031-095025_0007_85b9c02c2db15471.jpg'},
{url:'img/20131031-192856_0013_67631ff755f2267f.jpg'},
{url:'img/20131215-123401_0007_95284abe0a3550a2.jpg'},
{url:'img/20131231-232644_0008_397179b35afd1608.jpg'},
{url:'img/20140101-004840_0048_fff080f2e00829cc.jpg'},
{url:'img/20140101-004911_0049_3953de6be9292d07.jpg'},
{url:'img/20140222-153313_0044_3352548829b9deca.jpg'},
{url:'img/20140222-153630_0056_a7956b6d17b6ed8c.bw.jpg'},
{url:'img/20140222-171050_0115_44e121f85991b882.jpg'},
{url:'img/20140222-183245_0165_0243ec0f7c7d0489.jpg'},
{url:'img/20140222-191221_0192_32b4b5235e8ca081.jpg'},
{url:'img/20140302-194933_0036_98356e542602426e.jpg'},
{url:'img/20140315-121429_0015_8c7c8eb72d9aeebc.jpg'},
{url:'img/20140315-144052_0045_e0ff431ac18337d6.bw.jpg'},
{url:'img/20140315-144052_0045_e0ff431ac18337d6.jpg'},
{url:'img/20140315-174920_0068_d67e0a89131d90c2.jpg'},
{url:'img/20140316-134340_0130_69685d71b5db1322.jpg'},
{url:'img/20140316-140255_0134_74528acfcc5552a3.jpg'},
{url:'img/20140416-094252_0067_72971c4df2479960.jpg'},
{url:'img/20140416-100648_0084_0e2fd44ee8a26644.jpg'},
{url:'img/20140416-101605_0088_6f9247b098c8e098.jpg'},
{url:'img/20140417-055804_0182_ac034aad647eb95b.bw.jpg'},
{url:'img/20140417-055804_0182_ac034aad647eb95b.jpg'},
{url:'img/20140602-075052_0001_6ff87f70261f9824.jpg'},
{url:'img/20140605-204205_0083_ef766b936ba4efa8.jpg'},
{url:'img/20140606-070712_0086_66430a309cd31af2.jpg'},
{url:'img/20140606-173322_0118_537cb27d72c40ec1.jpg'},
{url:'img/20140607-085916_0173_476f8dfda89fc06e.jpg'},
{url:'img/20140607-091417_0177_58bad2a66fc185ca.jpg'},
{url:'img/20140607-092249_0178_4a0119393e0a42e1.jpg'},
{url:'img/20140607-202657_0282_5296a848c41a30e2.jpg'},
{url:'img/20140607-203341_0301_a6a169c5026a7d85.jpg'},
{url:'img/20140607-211746_0331_353daa46e1adca27.jpg'},
{url:'img/20140607-213832_0343_fb2c5d53667f8cf4.jpg'},
{url:'img/20140609-130743_0041_ffe625fdeb9706a1.jpg'},
{url:'img/20140614-215556_0048_0b9cb5844061bf6a.jpg'},
{url:'img/20140614-221816_0056_509f665838f388fc.jpg'},
{url:'img/20140614-223342_0064_9b7dc5815011a393.jpg'},
{url:'img/20140614-235724_0096_7b8d02c4aa9343f6.jpg'},
{url:'img/20140614-235746_0097_9e524897f68a24ff.jpg'},
{url:'img/20140615-000106_0099_ea3b3c3f7e69f668.jpg'},
{url:'img/20140615-000509_0107_bfe70521f357523d.jpg'},
{url:'img/20140615-134808_0075_1f7cc3a3e40e1522.jpg'},
{url:'img/20140621-153710_0042_827ed6d63e8437fa.jpg'},
{url:'img/20140621-235504_0085_4636d4c6327dd361.jpg'},
{url:'img/20140622-004042_0093_5cd8c5848fb3bc56.jpg'},
{url:'img/20140622-165322_0113_334f5f69def48116.jpg'},
{url:'img/20140629-183815_0045_908789ddca2ab23c.bw.jpg'},
{url:'img/20140703-193618_0028_2ac9d496424177b7.jpg'},
{url:'img/20140703-194747_0037_21053430ba167b7d.jpg'},
{url:'img/20140704-204709_0063_d160e20dfdc6e58b.jpg'},
{url:'img/20140706-190705_0142_7863946ec8f9591a.hdr.jpg'},
{url:'img/20140712-121820_0027_76c07d7a226f45df.jpg'},
{url:'img/20140712-164835_0101_74b44f31d883efda.jpg'},
{url:'img/20140713-132133_0011_9f1cd25e404f4783.jpg'},
{url:'img/20140713-151617_0044_00b6aebf4b433007.jpg'},
{url:'img/20140714-210038_0009_cc92df1a56bd4248.jpg'},
{url:'img/20140714-224202_0082_7ebf5109476d5fa6.jpg'},
{url:'img/20140714-224316_0089_22e26f16c8e184aa.jpg'},
{url:'img/20140715-212321_0020_2f0c14983c52c498.jpg'},
{url:'img/20140716-201938_0039_68b9a7676173434c.jpg'},
{url:'img/20140716-202057_0046_d5cc017f6dd2b018.jpg'},
{url:'img/20140716-202246_0048_99de6551f6c3ab7a.jpg'},
{url:'img/20140716-212252_0083_e9cff438d5211974.jpg'},
{url:'img/20140716-230311_0144_aaf4258a35260064.jpg'},
{url:'img/20140903-214042_0008_74c3cc725458bde8.jpg'},
{url:'img/20140903-221934_0030_d343b2914b55db20.jpg'},
{url:'img/20141119-225936_0013_c306d32483c6852e.jpg'},
{url:'img/20141213-211450_0002_ac4d7d38da50035e.jpg'},
{url:'img/20141214-180026_0005_4d7dc856c0659fb4.jpg'},
{url:'img/20150228-211928_0002_2ee9e07b43c78e55.jpg'},
{url:'img/20150308-112135_0003_e71a27cfda7059f0.jpg'},
{url:'img/20150320-203926_0050_9052c1d7aa0ff321.jpg'},
{url:'img/20150524-121200_0092_49b9b3dd465db7d7.jpg'},
{url:'img/20150718-184219_0013_820a6388940ca312.jpg'},
{url:'img/20150725-124729_0019_14b9d4ff72bdf6e5.jpg'},
{url:'img/20150905-123947_0004_b78e1be483d0a26a.jpg'},
{url:'img/20150906-171016_0116_f6660c8a33369879.jpg'},
{url:'img/20150906-202515_0184_95cadf6139aedadc.jpg'},
{url:'img/20150907-115941_0005_77d07f977c06ddcb.jpg'},
{url:'img/20150907-131235_0034_d2cc54e9ff5146f0.jpg'},
{url:'img/20150907-131615_0035_0c52ef2eac3c97ad.jpg'},
{url:'img/20150921-113704_0002_01765e386162d794.jpg'},
{url:'img/20150926-155044_0024_96d920a40578b544.jpg'},
{url:'img/20150927-180850_0024_0607e96e3db62750.jpg'},
{url:'img/20150927-184017_0168_65121b972c2df92e.jpg'},
{url:'img/20150927-191645_0194_bc87fa28890fc04c.jpg'},
{url:'img/20150927-191953_0199_9848fdfd359fd607.jpg'},
{url:'img/20160131-165801_0023_bdeae8efa8de0e77.jpg'}
];
