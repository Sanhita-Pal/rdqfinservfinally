using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using rdq_finserv.Models;

namespace rdq_finserv.Controllers
{
    public class sign_upController : ApiController
    {
        private RDQFinservEntities db = new RDQFinservEntities();

       
        public IQueryable<sign_up> Getsign_up()
        {
            return db.sign_up;
        }

        [ResponseType(typeof(sign_up))]
        public IHttpActionResult Getsign_up(int id)
        {
            sign_up sign_up = db.sign_up.Find(id);
            if (sign_up == null)
            {
                return NotFound();
            }

            return Ok(sign_up);
        }

        [ResponseType(typeof(void))]
        public IHttpActionResult Putsign_up(int id, sign_up sign_up)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sign_up.uid)
            {
                return BadRequest();
            }

            db.Entry(sign_up).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!sign_upExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ResponseType(typeof(sign_up))]
        public IHttpActionResult Postsign_up(sign_up sign_up)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.sign_up.Add(sign_up);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = sign_up.uid }, sign_up);
        }

        [ResponseType(typeof(sign_up))]
        public IHttpActionResult Deletesign_up(int id)
        {
            sign_up sign_up = db.sign_up.Find(id);
            if (sign_up == null)
            {
                return NotFound();
            }

            db.sign_up.Remove(sign_up);
            db.SaveChanges();

            return Ok(sign_up);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool sign_upExists(int id)
        {
            return db.sign_up.Count(e => e.uid == id) > 0;
        }
    }
}