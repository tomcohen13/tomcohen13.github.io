

"""Thank you bored guy from internet:"""

import json


num2words = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', \
             6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', \
            11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', \
            15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', \
            19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Forty', \
            50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', \
            90: 'Ninety', 0: 'Zero'}

def fix_accordion_item(serial_num : int, dates : str, title : str, body : str) -> str:
    pattern = """
    <li class="timeline-item accordion-item">
        <div class="timeline-info">
            <span>[DATES]</span>
        </div>
        <div class="timeline-marker"></div>
        <h3 class="timeline-title accordion-header" id="flush-heading[NUM]">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse[NUM]" aria-expanded="false" aria-controls="flush-collapse[NUM]">
            [TITLE]
            </button>
        </h2>
        <div id="flush-collapse[NUM]" class="accordion-collapse collapse" aria-labelledby="flush-heading[NUM]" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            [BODY]
            </div>
        </div>
    </li>
    """
    out = pattern.replace("[NUM]", num2words[serial_num])
    out = pattern.replace("[DATES]", dates)
    out = pattern.replace("[TITLE]", title)
    out = pattern.replace("[BODY]", body).replace("desc", "")
    
    return out

import json.encoder
if __name__ == "__main__":

    fix_accordion_item(5, dates="Feb 2022 - May 2022", title="Programmer & Team Leader | Scramble", body="""<p class="desc"><strong>senior-scramble.com</strong></p>
                            <p class="desc">Coded & deployed a web app that helped Columbia seniors "shoot their shot" using AI recommendations and advanced search.</p>
                            <p class="desc">1300+ registered and 600+ daily active users. A team of 5.</p>
                            <p class="desc"><strong>Stack:</strong> Python, Flask, Neo4j AuraDB, HTML, CSS, JS, AWS S3, Heroku</p>""")
