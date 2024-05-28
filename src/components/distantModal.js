import React from 'react';
import Modal from 'react-modal';

const DistantModal = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            className="distant-modal-root"
            overlayClassName="overlay"
        >
            <h2>{title}</h2>
            <div className="distant-modal-root">
                <div className="distant-modal-wrapper">
                    <div className="title-container">
                        <h3>Mesafeli Satış Sözleşmesi</h3>
                    </div>
                    <div className="description-container">
                        <div className="title-item">
                            <p>
                                MESAFELİ SÖZLEŞME
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Gezer Grup İnsan Kaynakları Hizmetleri Danışmanlık Tic.A.Ş. (“isbul.net”) ile İş Ortağı, aşağıdaki şartlarla sanal ortamda işbu Mesafeli Üyelik Sözleşmesi (“Sözleşme”)’nin yapılması konusunda anlaşmışlardır.
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                1.     TARAFLAR:
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                1.1.  Hizmet Sahibi:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Unvanı     : GEZER GRUP İNSAN KAYNAKLARI EĞİTİM VE DANIŞMANLITİCARET ANONİM ŞİRKETİ
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Adres       : Şirinevler Mah.Fetih 1.Sok. No:1-3 Daire:6 Bahçelievler/İSTANBUL
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Telefon    : (0212) 452 16 04
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                E-mail      : info@isbul.net
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                1.2.  İş Ortağı:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Adı-Soyadı/Unvanı: #adsoyad#
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Adres: #adres#
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                               Telefon: #telefon#
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Email: #eposta#
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                2.     KONU:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                               İşbu sözleşmenin konusu, İşbul.net’in internet sitesi üzerinden İş Ortağının siparişini verdiği ve aşağıdaki belirtilen nitelikleri ve satış bedelini haiz hizmetin satışını ve Sözleşme kapsamında tarafların hak ve yükümlülüklerini belirlemektir. Hizmet, İş Ortağının belirtilen şartlar dahilinde ihtiyacı olan iş gücünün temini amacıyla İşbul.net internet sitesi üzerinden iş ilanı verilmesi, doping hakkı satın alınması ve aday veri tabanına ulaşılmasına ilişkindir.
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                3.     HİZMET:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>Hizmetin süresi, bedeli, çeşidi ve miktarı, İşbul.net internet sitesi üzerinde ve aşağıdaki belirtildiği gibidir. İş Ortağı tarafından aşağıdaki bilgiler onaylanmıştır.                            </p>
                            <p>#paket-icerigi#</p>
                        </div>
                        <div className="title-item">
                            <p>
                                4.     HİZMET SÜRESİ:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Hizmet, İş Ortağı tarafından iptal edilmediği ve İş Ortağının Sözleşme’ye aykırılığı olmadığı müddetçe, bu Sözleşmenin 3. maddesinde belirtilen süre boyunca verilmeye devam edecektir.                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                5.     MÜŞTERİ YÜKÜMLÜLÜKLERİ:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                    5.1.
                                </span>
                                İş Ortağı, sözleşmeye konu hizmetin niteliği, satış bedeli, ödeme şekli konularında İşbul.net’te bulunan bilgileri ve sözleşmedeki bilgileri okuyup anladığını ve elektronik ortamda gerektiği gibi onay verdiğini beyan, kabul ve taahhüt eder.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.2
                                </span>
                                İş Ortağı sözleşme kapsamında vereceği her bir ilanın yalnızca bir pozisyona ilişkin olacağını beyan, kabul ve taahhüt eder.                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.3
                                </span>
                                İş Ortağı, işbu hizmet kapsamında ulaştığı adaylara ilişkin bilgileri, 3. kişilerle paylaşmama ve gizliliğini korumakla yükümlüdür. İş Ortağı aday veri tabanı ve içeriğinde bulunan bilgileri sözleşme amacı dışında kullanmamakla yükümlüdür. İş Ortağı’nın bu yükümlülüklere aykırı davranması halinde İşbul.net, Sözleşme’yi tek taraflı olarak feshedebilir. Bu halde, İş Ortağı sözleşme bedelinin iadesini talep edemeyeceğini ve İşbul.net’in telafisi güç zararının oluştuğunu kabul ve taahhüt eder.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.4
                                </span>
                                İşbul.net’in sözleşme şartları ile ilgili olarak her zaman kısıtlama ve değişiklik yapma hakkının bulunduğunu İş Ortağı peşinen ve gayrikabil-i rücu olarak kabul ve taahhüt eder.                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.5
                                </span>
                                İşbul.net’in satın alınan hizmet ile ilgili olarak ek sözleşme talep edebileceğini, İş Ortağı ise ek sözleşmenin kendisi tarafından imzalanmaması durumunda hizmet talebinde bulanamayacağını kabul ve taahhüt eder.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.6
                                </span>
                                İş Ortağı, ilan edeceği pozisyonlar ve profilindeki her türlü hatadan veya adaylara aktarılacak yanlış bilgiden sorumludur. Ayrıca İş Ortağı, yayınlayacağı tüm ilan içeriklerinin yürürlükte olan mevzuata uygun olarak düzenlenmesinden, firma adını ve ticari ünvanını açıkça ve doğru bir şekilde belirtmekten bizzat ve tek başına sorumludur. İşbu Sözleşme’ye konu firma profili, firmanın adı ve ticari unvanı ve ilan içeriği ile ilgili 3. kişilerin tüm taleplerinin muhatabı İş Ortağı olup, bu konuda İşbul.net’in hiçbir sorumluluğu olmadığını, kabul, beyan ve taahhüt eder.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.7
                                </span>
                                İş Ortağı işbu Sözleşme kapsamındaki yükümlülüklerini ihlal ettiği takdirde, İşbul.net’in bu nedenle uğradığı zararı tazminle mükelleftir. İşbul.net tarafından bu nedenle idari para cezası, vesair her ne nam altında olursa olsun ceza veya tazminatların ödenmesi halinde, İşbul.net’in İş Ortağı’na rücu hakkı olup, İş Ortağı ilk yazılı talepte İşbul.net’e derhal ve tüm ferileri ile birlikte ödeme yapmayı kabul ve taahhüt eder.                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   5.8
                                </span>
                                Sözleşme konusu hizmet, İş Ortağı’na özel olarak sunulmaktadır. İş Ortağı bu Sözleşme’den doğan hak ve alacaklarını üçüncü bir kişiye devir veya temlik edemeyeceğini peşinen kabul ve taahhüt eder.                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                6.     SÖZLEŞME BEDELİ:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   6.1.
                                </span>
                                Sözleşme bedeli, KDV dahil #tutar# TL'dir.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   6.2.
                                </span>
                                Ücretin, sözleşmeye konu hizmetin verilmesinden önce ödenmesi zorunludur. İş Ortağı ödeme yapılmadan hizmetin verilmeyeceğini peşinen kabul ve taahhüt eder.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   6.3.
                                </span>
                                Sözleşme bedeli, İşbul.net internet sitesi üzerinden banka kartı / kredi kartı ile yapılacaktır.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   6.4.
                                </span>
                                Sözleşme bedelinin, İşbul.net’e herhangi bir sebeple aktarılmaması veya aktarılamaması durumunda, İşbul.net’in sözleşme konusu hizmeti verme yükümlülüğü yoktur.
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                7.     BEDEL İADESİ ve CAYMA HAKKI:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   7.1.
                                </span>
                                İş Ortağı Sözleşme kapsamındaki yükümlülüklerini yerine getirmesine karşın hizmete konu ilanı 365 gün içerisinde İşbul.net sitesi üzerinde yayınlanmamışsa, iş ortağı bedelin iadesini talep edebilir.                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   7.2.
                                </span>
                                Sözleşmenin ifası elektronik ortamda ve anında gerçekleşmektedir. Niteliği gereği ve Tüketicinin Korunması Hakkında Yönetmelik 8. Maddesi ve Mesafeli Sözleşmeler Yönetmeliği 15. maddesi uyarınca da İş Ortağı’nın cayma hakkı bulunmamaktadır ve İş Ortağına iadesi mümkün değildir.                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                8.     KİŞİSEL VERİLERİN KORUNMASI:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   8.1.
                                </span>
                                Taraflar işbu Sözleşme’nin ifası kapsamında 6698 sayılı Kişisel Verilerin Korunma Hakkındaki Kanun’dan doğan yükümlülüklerini yerine getireceğini beyan, kabul ve taahhüt eder. İş Ortağı bu yükümlülüğüne aykırı davranışı nedeniyle uğranılan zararı tek başına karşılamakla yükümlüdür. İş Ortağının mezkur kanuna aykırılıklarından İşbul.net sorumlu değildir.
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   8.2.
                                </span>
                                İş Ortağı, hizmetin ifası sürecinde edinmiş olduğu kişisel verileri sadece iş gücü ihtiyacını karşılamak amacıyla işe alım süreciyle sınırlı olarak ve mevzuata uygun bir şekilde işleyebilir. 6698 sayılı Kişisel Verilerin Korunma Hakkındaki Kanun ve ilgili diğer mevzuatta öngörülen yasal haller dışında, İş Ortağı mezkur bilgileri hiçbir şekilde üçüncü kişilerle paylaşamaz ve yurtdışına aktaramaz. İş Ortağı bu yükümlülüğüne aykırı davranışı nedeniyle uğranılan zararı tek başına karşılamakla yükümlüdür.                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   8.3.
                                </span>
                                İşe alımın gerçekleşmesi durumunda, İş Ortağı gerekli bilgileri veri sahibi kişiden doğrudan talep etmekle yükümlüdür. İşe alımın tamamlanması durumunda, İşbul.net aracılığı ile elde edilen bilgiler, hiçbir suretle İş Ortağı tarafından işlenemez ve kullanılamaz. İşe alımın tamamlanması sonrasında, kişisel verilere ilişkin mevzuata aykırılık durumlarından iş ortağı tek başına sorumludur                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   8.4.
                                </span>
                                Sözleşme’nin tarafları aralarında paylaşılan kişisel verilerin hukuka aykırı olarak işlenmesini, erişilmesini engellemek ve hukuka uygun olarak saklanması için mevzuat uyarınca gerekli tüm idari ve teknik tedbirleri uygulamayı gayrikabil-i rücu olarak beyan, kabul ve taahhüt eder.                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                9.     GİZLİLİK:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   9.1.
                                </span>
                                Sözleşme tarafları, işbu Sözleşme ve Sözleşme’nin ifası sürecinde öğrendiği bilgilerin sır/gizli bilgi niteliğinde olduğunu kabul eder. Yasal zorunluluklar dışında bu bilgileri hiçbir surette üçüncü kişilerle paylaşmayacağını ve aksi her türlü davranıştan kaçınacağını kabul ve taahhüt eder.                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                <span>
                                   9.2.
                                </span>
                                İşbu Sözleşme sona ermesinden ve sona erme sebebinden bağımsız oalrak, gizlilik hükümleri, taraflar arasında geçerli olmaya devam edecektir.                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                10. TEBLİGAT :
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                Tarafların yazılı bildirimde bulunmadıkça yukarıda belirtilen adresleri yasal tebligat adresi olup Sözleşme’ye dayalı olarak yapılacak tüm bildirimlerin yazılı şekilde tebligat adresine bildirilmesi gerektiğini taraflar kabul ve taahhüt eder.
                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                11. UYUŞMAZLIK:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                İşbu Sözleşme sebebiyle çıkabilecek uyuşmazlıklarda Bakırköy Mahkemeleri ve Bakırköy İcra Daireleri yetkilidir. İşbu Sözleşme sebebiyle çıkabilecek uyuşmazlıklarda, İşbul.net’in sunucularında veya veritabanında bulunan kayıtların, İşbul.net’e ait ticari defterlerin, kayıtlar, bilgisayar kayıtları ve diğer tüm evraklar kesin delil niteliğinde olduğun Taraflar kabul ve beyan eder.                            </p>
                        </div>
                        <div className="title-item">
                            <p>
                                12. SÖZLEŞME TARİHİ VE YÜRÜRLÜK:
                            </p>
                        </div>
                        <div className="text-item">
                            <p>
                                İşbu sözleşme #tarih# tarihinde düzenlenmiştir. İşbu Mesafeli Sözleşme İş Ortağı’nın, hizmet bedelini kredi kartı yada EFT/Havele ile  ödeme yaptığı tarihte yürürlüğe girer ve Sözleşme’nin devamı süresince yürürlükte kalır. Mesafeli Sözleşme her ne sebeple olursa olsun sona erdiğinde Taraflarca hiçbir bildirime gerek kalmaksızın işbu Sözleşme de kendiliğinden sona erer.</p>
                        </div>


                    </div>
                    <div className="button-block">
                        <button onClick={onRequestClose} className="modal-close-button">
                            Kapat
                        </button>
                    </div>

                </div>

            </div>

        </Modal>
    );
};

export default DistantModal;